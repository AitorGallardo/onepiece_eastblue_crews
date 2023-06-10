import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  crews: [],
  members: [],
  isLoading: false
}

export const onePieceSlice = createSlice({
  name: 'onepiece',
  initialState,
  reducers: {
    startLoadingCrews: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLoading = true;
    },
    setCrews: (state,payload) => {
      state.crews = payload.crews;
      state.members = payload.members;
      state.isLoading = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { startLoadingCrews, setCrews } = onePieceSlice.actions