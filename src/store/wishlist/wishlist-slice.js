import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false,
    },
    reducers: {
        replaceWishlist(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToWishlist(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === newItem.id
            );
            state.totalQuantity++;
            state.changed = true;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
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
        removeItemFromWishlist(state, action) {
            const id = action.payload;

            state.changed = true;
            state.items = state.items.filter((item) => item.id !== id);
            state.totalQuantity = state.items.reduce(
                (acc, cur) => acc + cur.quantity,
                0
            );
        },
        updateItemQuantityFromWishlist(state, action) {
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
        clearAllFromWishlist(state) {
            state.changed = true;
            state.items = [];
            state.totalQuantity = 0;
        },
    },
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice;
