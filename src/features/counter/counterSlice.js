import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { recheckUser } from './counterAPI';

const initialState = {
  loggedinUser: null,
  status: 'idle',
  error: null,
};

export const checkUserAsync = createAsyncThunk(
  'counter/recheckUser',
  async() => {
    const res = await recheckUser();

    return res.data;
  }
)



export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        state.value += 1;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(checkUserAsync.pending, (state) => {
          state.status = 'loading';
        })
    },
  });
  
  export const { increment } = counterSlice.actions;
  
//   export const selectUser = (state) => state.auth.loggedinUser;
  export const selectStatus = (state) => state.counter.status;
//   export const selectError = (state) => state.auth.error;
  
  export default counterSlice.reducer;