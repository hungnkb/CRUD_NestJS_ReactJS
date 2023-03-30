import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    product: {
        _id: '',
        name: '',
        category: '',
        quantity: '',
        price: '',
        description: '',
    },
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        edit: (state, action) => {
            state.product = action.payload.product
        },
    },
})

export const { edit } = productSlice.actions

export default productSlice.reducer