import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder 
        .addCase(PRODUCT_LIST_REQUEST, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(PRODUCT_LIST_SUCCESS, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })
        .addCase(PRODUCT_LIST_FAIL, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})


export const { actions, reducer } = productSlice;

export default reducer;