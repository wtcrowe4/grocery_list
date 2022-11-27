import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';



// @ts-expect-error TS(2345): Argument of type 'string | null' is not assignable... Remove this comment to see the full error message
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    status: 'idle',
    error: null,
    user: user ? user : null,
    message: ''
};

//Register User
export const register = createAsyncThunk('/auth/register', async (user, thunkAPI) => {
    try {
        return authService.register(user);
    } catch (error) {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

//Login User
export const login = createAsyncThunk('/auth/login', async (user, thunkAPI) => {
    try {
        return await authService.login(user);
    } catch (error) {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

//Logout User
export const logout = createAsyncThunk('/auth/logout', async (user, thunkAPI) => {
    try {
        // @ts-expect-error TS(2554): Expected 0 arguments, but got 1.
        return await authService.logout(user);
        
    } catch (error) {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

//Reducers
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.status = 'idle';
            state.error = null;
            state.user = null;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = null;
                state.user = action.payload;
                state.message = 'Registration Successful';
            })
            .addCase(register.rejected, (state, action) => {
                state.status = 'failed';
                // @ts-expect-error TS(2322): Type 'true' is not assignable to type 'null'.
                state.error = true;
                state.user = null;
                state.message = 'Registration Failed';
            })
            .addCase(register.pending, (state) => {
                state.status = 'loading';
                state.error = null;
                state.user = null;
                state.message = 'Registering User';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = null;
                state.user = action.payload;
                state.message = 'Login Successful';
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                // @ts-expect-error TS(2571): Object is of type 'unknown'.
                state.error = action.payload.message;
                state.user = null;
                state.message = 'Login Failed';
            })
            .addCase(login.pending, (state) => {
                state.status = 'loading';
                state.error = null;
                state.user = null;
                state.message = 'Logging In';
            })
            .addCase(logout.fulfilled, (state) => {
                state.status = 'succeeded';
                state.error = null;
                state.user = null;
                state.message = 'Logout Successful';
            })
            .addCase(logout.rejected, (state, action) => {
                state.status = 'failed';
                // @ts-expect-error TS(2571): Object is of type 'unknown'.
                state.error = action.payload.message;
                state.user = null;
                state.message = 'Logout Failed';
            })
            .addCase(logout.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
                state.user = null;
                state.message = 'Logging Out';
            })
            }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;