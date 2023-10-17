import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false,
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === newItem.id
            );
            const itemQuantity = newItem.quantity || 1;
            state.totalQuantity += itemQuantity;
            state.changed = true;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: itemQuantity,
                    totalPrice: newItem.price,
                    name: newItem.title,
                    image: newItem.image,
                    slug: newItem.slug,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
        },
        increaseItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;

            state.changed = true;
            state.items = state.items.filter((item) => item.id !== id);
            state.totalQuantity = state.items.reduce(
                (acc, cur) => acc + cur.quantity,
                0
            );
        },
        updateItemQuantityFromCart(state, action) {
            const newQuantity = action.payload;

            state.items = state.items.map((item) => ({
                ...item,
                quantity: newQuantity[item.id] || item.quantity,
                totalPrice: item.price * newQuantity[item.id] || item.price,
            }));
            state.totalQuantity = state.items.reduce(
                (acc, cur) => acc + cur.quantity,
                0
            );
            state.changed = true;
        },
        clearAllFromCart(state) {
            state.changed = true;
            state.items = [];
            state.totalQuantity = 0;
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
