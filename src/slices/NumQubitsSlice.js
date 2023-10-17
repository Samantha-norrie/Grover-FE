import { createSlice } from '@reduxjs/toolkit';

export const numQubitSlice = createSlice({
  name: 'numQubit',
  initialState: {
    value: 4,
  },
  reducers: {
    updateNumQubits: (state, action) => {
      state.value = action.payload

    }
  },
})

// Action creators are generated for each case reducer function
export const {updateNumQubits} = numQubitSlice.actions;

export default numQubitSlice.reducer;