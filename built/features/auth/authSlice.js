"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reset = exports.authSlice = exports.logout = exports.login = exports.register = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
// import { Action } from '@remix-run/router';
const authService_1 = __importDefault(require("./authService"));
const user = JSON.parse(localStorage.getItem('user'));
const initialState = {
    status: 'idle',
    error: null,
    user: user ? user : null,
    message: ''
};
//Register User
exports.register = (0, toolkit_1.createAsyncThunk)('/auth/register', (user, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return authService_1.default.register(user);
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
}));
//Login User
exports.login = (0, toolkit_1.createAsyncThunk)('/auth/login', (user, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield authService_1.default.login(user);
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
}));
//Logout User
exports.logout = (0, toolkit_1.createAsyncThunk)('/auth/logout', (thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield authService_1.default.logout();
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
}));
//Reducers
exports.authSlice = (0, toolkit_1.createSlice)({
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
            .addCase(exports.register.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.error = null;
            state.user = action.payload;
            state.message = 'Registration Successful';
        })
            .addCase(exports.register.rejected, (state) => {
            state.status = 'failed';
            state.error = true;
            state.user = null;
            state.message = 'Registration Failed';
        })
            .addCase(exports.register.pending, (state) => {
            state.status = 'loading';
            state.error = null;
            state.user = null;
            state.message = 'Registering User';
        })
            .addCase(exports.login.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.error = null;
            state.user = action.payload;
            state.message = 'Login Successful';
        })
            .addCase(exports.login.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload.message;
            state.user = null;
            state.message = 'Login Failed';
        })
            .addCase(exports.login.pending, (state) => {
            state.status = 'loading';
            state.error = null;
            state.user = null;
            state.message = 'Logging In';
        })
            .addCase(exports.logout.fulfilled, (state) => {
            state.status = 'succeeded';
            state.error = null;
            state.user = null;
            state.message = 'Logout Successful';
        })
            .addCase(exports.logout.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload.message;
            state.user = null;
            state.message = 'Logout Failed';
        })
            .addCase(exports.logout.pending, (state, action) => {
            state.status = 'loading';
            state.error = null;
            state.user = null;
            state.message = 'Logging Out';
        });
    }
});
exports.reset = exports.authSlice.actions.reset;
exports.default = exports.authSlice.reducer;
