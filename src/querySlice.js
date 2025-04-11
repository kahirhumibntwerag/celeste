import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: 'initial'
}

export const querySlice = createSlice({
    name:'query',
    initialState,
    reducers: {
        setQuery: (state, action)=>{
            state.text = action.payload
        }

    }
})

export const {setQuery} = querySlice.actions
export default querySlice.reducer