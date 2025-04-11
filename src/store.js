import {configureStore} from '@reduxjs/toolkit'
import queryReducer from './querySlice'
import {apiSlice} from './apiSlice'

export const store = configureStore({
    reducer:{
        query: queryReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(apiSlice.middleware)
    }

}) 