import { configureStore } from '@reduxjs/toolkit'
import { onePieceSlice } from './slices/onePieceSlice'

export const store = configureStore({
  reducer: {
    onepice: onePieceSlice.reducer
  },
})