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
            // @ts-expect-error TS(2571): Object is of type 'unknown'.
            const token = thunkAPI.getState().auth.user.user.token;
            return await listService.create(list, token);
        } catch (error) {
            // @ts-expect-error TS(2571): Object is of type 'unknown'.
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
 
);

export const getMyLists = createAsyncThunk('list/all',
    async (userId, thunkAPI) => {
        try {
            // @ts-expect-error TS(2571): Object is of type 'unknown'.
            const token = thunkAPI.getState().auth.user.user.token;
            return await listService.all(token, userId);
        } catch (error) {
            // @ts-expect-error TS(2571): Object is of type 'unknown'.
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const deleteList = createAsyncThunk('list/delete',
    async (listId, thunkAPI) => {
        try {
            // @ts-expect-error TS(2571): Object is of type 'unknown'.
            const token = thunkAPI.getState().auth.user.user.token;
            return await listService.deleteList(listId, token);
        } catch (error) {
            // @ts-expect-error TS(2571): Object is of type 'unknown'.
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const getOneList = createAsyncThunk('list/get',
    async (listId, thunkAPI) => {
        try {
            // @ts-expect-error TS(2571): Object is of type 'unknown'.
            const token = thunkAPI.getState().auth.user.user.token;
            return await listService.get(listId, token);
        } catch (error) {
            // @ts-expect-error TS(2571): Object is of type 'unknown'.
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const addItem = createAsyncThunk(`list/addItem`,
    async (item, thunkAPI) => {
        try {
            // @ts-expect-error TS(2571): Object is of type 'unknown'.
            const token = thunkAPI.getState().auth.user.user.token;
            return await listService.addItem(item, token);
        } catch (error) {
            // @ts-expect-error TS(2571): Object is of type 'unknown'.
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }   
);

export const updateList = createAsyncThunk(`list/update`,
    async (list, thunkAPI) => {
        try {
            // @ts-expect-error TS(2571): Object is of type 'unknown'.
            const token = thunkAPI.getState().auth.user.user.token;
            return await listService.update(list, token);
        } catch (error) {
            // @ts-expect-error TS(2571): Object is of type 'unknown'.
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);



export const listSlice = createSlice({
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
            .addCase(createList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = null;
                // @ts-expect-error TS(2345): Argument of type 'any' is not assignable to parame... Remove this comment to see the full error message
                state.lists.push(action.payload);
                state.message = 'List created';
            })
            .addCase(createList.rejected, (state, action) => {
                state.status = 'failed';
                // @ts-expect-error TS(2322): Type 'true' is not assignable to type 'null'.
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
                // @ts-expect-error TS(2571): Object is of type 'unknown'.
                state.error = action.payload.message;
                state.message = 'Lists retrieval failed';
            })
            .addCase(getMyLists.pending, (state) => {
                state.status = 'loading';
                state.error = null;
                state.message = 'Retrieving lists';
             })
            .addCase(getOneList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = null;
                state.lists = action.payload;
                state.message = 'List retrieved';
            })
            .addCase(getOneList.rejected, (state, action) => {
                state.status = 'failed';
                // @ts-expect-error TS(2571): Object is of type 'unknown'.
                state.error = action.payload.message;
                state.message = 'List retrieval failed';
            })
            .addCase(getOneList.pending, (state) => {
                state.status = 'loading';
                state.error = null;
                state.message = 'Retrieving list';
            })
            .addCase(addItem.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = null;
                // @ts-expect-error TS(2339): Property 'items' does not exist on type 'never[]'.
                state.lists.items.push(action.payload);
                state.message = 'List updated';
            })
            .addCase(addItem.rejected, (state, action) => {
                state.status = 'failed';
                // @ts-expect-error TS(2571): Object is of type 'unknown'.
                state.error = action.payload.message;
                state.message = 'List update failed';
            })
            .addCase(addItem.pending, (state) => {
                state.status = 'loading';
                state.error = null;
                state.message = 'Updating list';
             })
            .addCase(deleteList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = null;
                // @ts-expect-error TS(2339): Property '_id' does not exist on type 'never'.
                state.lists = state.lists.filter(list => list._id !== action.payload.id);
                state.message = 'List removed';
            })
            .addCase(deleteList.rejected, (state, action) => {
                state.status = 'failed';
                // @ts-expect-error TS(2571): Object is of type 'unknown'.
                state.error = action.payload.message;
                state.message = 'List removal failed';
            })
            .addCase(deleteList.pending, (state) => {
                state.status = 'loading';
                state.error = null;
                state.message = 'Removing list';
            })
    }
});

export const { reset } = listSlice.actions;

export default listSlice.reducer;




