import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { Action } from '@remix-run/router';
import authService from './authService';


const user = JSON.parse(localStorage.getItem('user'));

interface User {
    user: {
        id: string,
        username: string,
        email: string,
        token: string
    }
}

interface State {
    status: string,
    error: boolean,
    user: User,
    message: string
}

interface Action {
    type: string,
    payload: any
}

const initialState = {
    status: 'idle',
    error: null,
    user: user ? user : null,
    message: ''
};

//Register User
export const register = createAsyncThunk('/auth/register', async (user: any, thunkAPI) => {
    try {
        return authService.register(user);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

//Login User
export const login = createAsyncThunk('/auth/login', async (user: any, thunkAPI) => {
    try {
        return await authService.login(user);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

//Logout User
export const logout = createAsyncThunk('/auth/logout', async (thunkAPI: any) => {
    try {
        return await authService.logout();
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

//Reducers
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state: State) => {
            state.status = 'idle';
            state.error = null;
            state.user = null;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state: State, action: Action) => {
                state.status = 'succeeded';
                state.error = null;
                state.user = action.payload;
                state.message = 'Registration Successful';
            })
            .addCase(register.rejected, (state: State) => {
                state.status = 'failed';
                state.error = true;
                state.user = null;
                state.message = 'Registration Failed';
            })
            .addCase(register.pending, (state: State) => {
                state.status = 'loading';
                state.error = null;
                state.user = null;
                state.message = 'Registering User';
            })
            .addCase(login.fulfilled, (state: State, action: Action) => {
                state.status = 'succeeded';
                state.error = null;
                state.user = action.payload;
                state.message = 'Login Successful';
            })
            .addCase(login.rejected, (state: State, action: Action) => {
                state.status = 'failed';
                state.error = action.payload.message;
                state.user = null;
                state.message = 'Login Failed';
            })
            .addCase(login.pending, (state: State) => {
                state.status = 'loading';
                state.error = null;
                state.user = null;
                state.message = 'Logging In';
            })
            .addCase(logout.fulfilled, (state: State) => {
                state.status = 'succeeded';
                state.error = null;
                state.user = null;
                state.message = 'Logout Successful';
            })
            .addCase(logout.rejected, (state: State, action: Action) => {
                state.status = 'failed';
                state.error = action.payload.message;
                state.user = null;
                state.message = 'Logout Failed';
            })
            .addCase(logout.pending, (state: State, action: Action) => {
                state.status = 'loading';
                state.error = null;
                state.user = null;
                state.message = 'Logging Out';
            })
            }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;