import { configureStore } from '@reduxjs/toolkit'
import { numQubitSlice } from './slices/NumQubitsSlice'
import { numSolutionsSlice } from './slices/NumSolutionsSlice'
import { qubitsListSlice } from './slices/QubitsListSlice'
import { groverDataSlice } from './slices/GroverDataSlice'
import { currentStepSlice } from './slices/CurrentStepSlice'
import { selectedValuesSlice } from './slices/SelectedValuesSlice'

export default configureStore({
  reducer: {
    numQubits: numQubitSlice.reducer,
    numIterations: numSolutionsSlice.reducer,
    numSolutions: numSolutionsSlice.reducer,
    qubitsList: qubitsListSlice.reducer,
    groverData: groverDataSlice.reducer,
    currentStep: currentStepSlice.reducer,
    selectedValues: selectedValuesSlice.reducer
  },
})