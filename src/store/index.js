import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import filterSlice from './product-filter/filter-slice';
import cartSlice from './cart/cart-slice';
import wishlistSlice from './wishlist/wishlist-slice';

const persistConfig = {
    key: 'root',
    storage,
};

const reducer = combineReducers({
    cart: cartSlice.reducer,
    filter: filterSlice.reducer,
    wishlist: wishlistSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export default store;
