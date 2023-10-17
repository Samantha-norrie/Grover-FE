import { configureStore } from '@reduxjs/toolkit'
import { numQubitSlice } from './components/slices/NumQubitsSlice'
import { numSolutionsSlice } from './components/slices/NumSolutionsSlice'
import { qubitsListSlice } from './components/slices/QubitsListSlice'

export default configureStore({
  reducer: {
    numQubits: numQubitSlice.reducer,
    numIterations: numSolutionsSlice.reducer,
    numSolutions: numSolutionsSlice.reducer,
    qubitsList: qubitsListSlice.reducer
  },
})