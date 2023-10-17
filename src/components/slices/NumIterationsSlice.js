import { createSlice } from '@reduxjs/toolkit';

export const numIterationsSlice = createSlice({
    name: 'numIterations',
    initialState: {
      value: 2,
    },
    reducers: {
      updateNumIterations: (state, action) => {
        state.value = action.payload
      }
    },
})

export const {updateNumIterations} = numIterationsSlice.actions;

export default numIterationsSlice.reducer;
