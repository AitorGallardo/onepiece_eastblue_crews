import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  crews: [],
  members: [],
  displayedMembers: [],
};

export const onepieceSlice = createSlice({
  name: 'onepiece',
  initialState,
  reducers: {
    startLoadingCrews: (state /*action*/) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLoading = true;
    },
    setAllData: (state, action) => {
      state.crews = action.payload.crews;
      state.members = action.payload.members;
      state.filteredByWordMembers = action.payload.members;
      state.displayedMembers = action.payload.members;
      state.isLoading = false;
    },
    setDisplayedMembers: (state, action) => {
      state.displayedMembers = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  startLoadingCrews,
  setAllData,
  setDisplayedMembers,
} = onepieceSlice.actions;
