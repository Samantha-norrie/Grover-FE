import { createSlice } from '@reduxjs/toolkit';

export const groverDataSlice = createSlice({
    name: 'groverData',
    initialState: {
      value: [],
    },
    reducers: {
      updateGroverData: (state, action) => {
        state.value = action.payload
      }
    },
})

export const {updateGroverData} = groverDataSlice.actions;

export default groverDataSlice.reducer;