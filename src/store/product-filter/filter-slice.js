import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filterData: [],
    },
    reducers: {
        addFilter(state, action) {
            const itemIndex = state.filterData.findIndex(
                (item) =>
                    item.group === action.payload.group &&
                    item.key === action.payload.key
            );
            if (itemIndex === -1) {
                state.filterData = [action.payload, ...state.filterData];
            } else {
                const filterStateClone = JSON.parse(
                    JSON.stringify(state.filterData)
                );
                filterStateClone[itemIndex] = action.payload;
                state.filterData = filterStateClone;
            }
        },
        removeFilter(state, action) {
            const { key } = action.payload;
            state.filterData = state.filterData.filter(
                (singleData) => singleData.key !== key
            );
        },

        clearAll(state) {
            state.filterData = [];
        },
    },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
