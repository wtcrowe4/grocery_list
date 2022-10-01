import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import listService from './listService';

const initialState = {
    lists: [],
    status: 'idle',
    error: null,
    message: ''
};

export const createList = createAsyncThunk('list/create',
    async (list, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.user.token;
            return await listService.create(list, token);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
    //     const response = await listService.create(list);
    //     return response;
    // }
);

export const getMyLists = createAsyncThunk('list/all',
    async (userId, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.user.token;
            return await listService.all(token, userId);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);


export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addList: (state, action) => {
            state.lists.push(action.payload);
        },

        
        
        
        
        reset: (state) => {
            state.lists = [];
            state.status = 'idle';
            state.error = null;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = null;
                state.lists.push(action.payload);
                state.message = 'List created';
            })
            .addCase(createList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = true;
                state.message = 'List creation failed';
            })
            .addCase(createList.pending, (state) => {   
                state.status = 'loading';
                state.error = null;
                state.message = 'Creating list';
            })
            .addCase(getMyLists.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = null;
                state.lists = action.payload;
                state.message = 'Lists retrieved';
            })
            .addCase(getMyLists.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload.message;
                state.message = 'Lists retrieval failed';
            })
            .addCase(getMyLists.pending, (state) => {
                state.status = 'loading';
                state.error = null;
                state.message = 'Retrieving lists';
             })
    //         .addCase(getOne.fulfilled, (state, action) => {
    //             state.status = 'succeeded';
    //             state.error = null;
    //             state.lists.push(action.payload);
    //             state.message = 'List retrieved';
    //         })
    //         .addCase(getOne.rejected, (state, action) => {
    //             state.status = 'failed';
    //             state.error = action.payload.message;
    //             state.message = 'List retrieval failed';
    //         })
    //         .addCase(getOne.pending, (state) => {
    //             state.status = 'loading';
    //             state.error = null;
    //             state.message = 'Retrieving list';
    //         })
    //         .addCase(update.fulfilled, (state, action) => {
    //             state.status = 'succeeded';
    //             state.error = null;
    //             state.lists.push(action.payload);
    //             state.message = 'List updated';
    //         })
    //         .addCase(update.rejected, (state, action) => {
    //             state.status = 'failed';
    //             state.error = action.payload.message;
    //             state.message = 'List update failed';
    //         })
    //         .addCase(update.pending, (state) => {
    //             state.status = 'loading';
    //             state.error = null;
    //             state.message = 'Updating list';
    //         })
    //         .addCase(remove.fulfilled, (state, action) => {
    //             state.status = 'succeeded';
    //             state.error = null;
    //             state.lists = state.lists.filter(list => list.id !== action.payload.id);
    //             state.message = 'List removed';
    //         })
    //         .addCase(remove.rejected, (state, action) => {
    //             state.status = 'failed';
    //             state.error = action.payload.message;
    //             state.message = 'List removal failed';
    //         })
    //         .addCase(remove.pending, (state) => {
    //             state.status = 'loading';
    //             state.error = null;
    //             state.message = 'Removing list';
    //         })
    }
});

export const { reset } = listSlice.actions;

export default listSlice.reducer;




