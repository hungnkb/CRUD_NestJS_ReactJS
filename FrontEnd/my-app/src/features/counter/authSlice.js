import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    isLogined: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            console.log(action);
        },
    },
})

export const { login } = authSlice.actions

export default authSlice.reducer