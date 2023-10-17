import { configureStore } from '@reduxjs/toolkit'
import { numQubitSlice } from './slices/NumQubitsSlice'
import { numSolutionsSlice } from './slices/NumSolutionsSlice'
import { qubitsListSlice } from './slices/QubitsListSlice'

export default configureStore({
  reducer: {
    numQubits: numQubitSlice.reducer,
    numIterations: numSolutionsSlice.reducer,
    numSolutions: numSolutionsSlice.reducer,
    qubitsList: qubitsListSlice.reducer
  },
})