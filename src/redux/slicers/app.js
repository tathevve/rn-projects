import { createSlice } from "@reduxjs/toolkit";

const name = "APP";
const initialState = {
  isLoading: false,
};


const appSlicer = createSlice({
  name,
  initialState,
  reducers: {
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  }
});
export const selectIsLoading = (state) => state.app.isLoading;

export const { setIsLoading } = appSlicer.actions;

export default appSlicer.reducer;
