import { createSlice } from '@reduxjs/toolkit';

export const numSolutionsSlice = createSlice({
    name: 'numSolutions',
    initialState: {
      value: 1,
    },
    reducers: {
      updateNumSolutions: (state, action) => {
        state.value = action.payload
      }
    },
})

export const {updateNumSolutions} = numSolutionsSlice.actions;

export default numSolutionsSlice.reducer;