import { createSlice } from '@reduxjs/toolkit';

export const selectedValuesSlice = createSlice({
    name: 'selectedValues',
    initialState: {
      value: [],
    },
    reducers: {
      updateSelectedValues: (state, action) => {
        state.value = action.payload
      }
    },
})

export const {updateSelectedValues} = selectedValuesSlice.actions;

export default updateSelectedValues.reducer;