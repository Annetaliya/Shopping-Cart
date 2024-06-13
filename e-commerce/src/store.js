import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'

// const store = createStore(reducer, initialState)
const store = configureStore({
    reducers: {
        products: productsReducer
    }
})

export default store;