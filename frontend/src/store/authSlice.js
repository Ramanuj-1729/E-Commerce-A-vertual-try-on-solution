import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
    user: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            const { user } = action.payload;
            state.user = user;
            if(user === null){
                state.isAuth = false;
            }
            else {
                state.isAuth = true;
            }
        },
        clearAuth: (state) => {
            state.isAuth = false;
            state.user = null;
        },
    },
});

export const { setAuth, clearAuth } = authSlice.actions;

export default authSlice.reducer;