import { createSlice } from '@reduxjs/toolkit';

export const selectedQubitsSlice = createSlice({
    name: 'selectedQubits',
    initialState: {
      value: [],
    },
    reducers: {
      updateSelectedQubits: (state, action) => {
        state.value = action.payload
      }
    },
})

export const {updateSelectedQubits} = selectedQubitsSlice.actions;

export default updateSelectedQubits.reducer;