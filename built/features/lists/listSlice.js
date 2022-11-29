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
exports.reset = exports.listSlice = exports.updateList = exports.addItem = exports.getOneList = exports.deleteList = exports.getMyLists = exports.createList = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const listService_1 = __importDefault(require("./listService"));
const initialState = {
    lists: [],
    status: 'idle',
    error: null,
    message: ''
};
exports.createList = (0, toolkit_1.createAsyncThunk)('list/create', (list, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = thunkAPI.getState().auth.user.user.token;
        return yield listService_1.default.create(list, token);
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
}));
exports.getMyLists = (0, toolkit_1.createAsyncThunk)('list/all', (userId, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = thunkAPI.getState().auth.user.user.token;
        return yield listService_1.default.all(token, userId);
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
}));
exports.deleteList = (0, toolkit_1.createAsyncThunk)('list/delete', (listId, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = thunkAPI.getState().auth.user.user.token;
        return yield listService_1.default.deleteList(listId, token);
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
}));
exports.getOneList = (0, toolkit_1.createAsyncThunk)('list/get', (listId, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = thunkAPI.getState().auth.user.user.token;
        return yield listService_1.default.get(listId, token);
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
}));
exports.addItem = (0, toolkit_1.createAsyncThunk)(`list/addItem`, (item, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = thunkAPI.getState().auth.user.user.token;
        return yield listService_1.default.addItem(item, token);
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
}));
exports.updateList = (0, toolkit_1.createAsyncThunk)(`list/update`, (list, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = thunkAPI.getState().auth.user.user.token;
        return yield listService_1.default.update(list, token);
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
}));
exports.listSlice = (0, toolkit_1.createSlice)({
    name: 'list',
    initialState,
    reducers: {
        reset: (state) => {
            state.lists = [];
            state.status = 'idle';
            state.error = null;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(exports.createList.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.error = null;
            state.lists.push(action.payload);
            state.message = 'List created';
        })
            .addCase(exports.createList.rejected, (state, action) => {
            state.status = 'failed';
            state.error = true;
            state.message = 'List creation failed';
        })
            .addCase(exports.createList.pending, (state) => {
            state.status = 'loading';
            state.error = null;
            state.message = 'Creating list';
        })
            .addCase(exports.getMyLists.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.error = null;
            state.lists = action.payload;
            state.message = 'Lists retrieved';
        })
            .addCase(exports.getMyLists.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload.message;
            state.message = 'Lists retrieval failed';
        })
            .addCase(exports.getMyLists.pending, (state) => {
            state.status = 'loading';
            state.error = null;
            state.message = 'Retrieving lists';
        })
            .addCase(exports.getOneList.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.error = null;
            state.lists = action.payload;
            state.message = 'List retrieved';
        })
            .addCase(exports.getOneList.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload.message;
            state.message = 'List retrieval failed';
        })
            .addCase(exports.getOneList.pending, (state) => {
            state.status = 'loading';
            state.error = null;
            state.message = 'Retrieving list';
        })
            .addCase(exports.addItem.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.error = null;
            state.lists.items.push(action.payload);
            state.message = 'List updated';
        })
            .addCase(exports.addItem.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload.message;
            state.message = 'List update failed';
        })
            .addCase(exports.addItem.pending, (state) => {
            state.status = 'loading';
            state.error = null;
            state.message = 'Updating list';
        })
            .addCase(exports.deleteList.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.error = null;
            state.lists = state.lists.filter(list => list._id !== action.payload.id);
            state.message = 'List removed';
        })
            .addCase(exports.deleteList.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload.message;
            state.message = 'List removal failed';
        })
            .addCase(exports.deleteList.pending, (state) => {
            state.status = 'loading';
            state.error = null;
            state.message = 'Removing list';
        });
    }
});
exports.reset = exports.listSlice.actions.reset;
exports.default = exports.listSlice.reducer;
