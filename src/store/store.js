import { configureStore } from '@reduxjs/toolkit'
import { onepieceSlice } from './slices/onepiece'

export const store = configureStore({
  reducer: {
    onepiece: onepieceSlice.reducer
  },
})