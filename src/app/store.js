import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
//import userReducer from '../features/user/userSlice';
//import listReducer from '../features/list/listSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        //user: userReducer,
        //list: listReducer
    },
});

