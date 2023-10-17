import { createSlice } from '@reduxjs/toolkit';

export const qubitsListSlice = createSlice({
    name: 'qubitsList',
    initialState: {
      value: [0,1],
    },
    reducers: {
      updateQubitsList: (state, action) => {
        state.value = action.payload
      }
    },
})

export const {updateQubitsList} = qubitsListSlice.actions;

export default updateQubitsList.reducer;