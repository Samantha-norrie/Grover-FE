import { createSlice } from '@reduxjs/toolkit';

export const currentStepSlice = createSlice({
  name: 'currentStep',
  initialState: {
    value: 0,
  },
  reducers: {
    updateCurrentStep: (state, action) => {
      state.value = action.payload

    }
  },
})

// Action creators are generated for each case reducer function
export const {updateCurrentStep} = currentStepSlice.actions;

export default currentStepSlice.reducer;