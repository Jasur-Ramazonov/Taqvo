import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isClose: true,
  currentLng: "uz",
};

const mySlice = createSlice({
  name: "mySlice",
  initialState,
  reducers: {
    setIsClose: (state, action) => {
      state.isClose = action.payload;
    },
    setCurrentLng: (state, action) => {
      state.currentLng = action.payload;
    },
  },
});

export const { setIsClose, setCurrentLng } = mySlice.actions;
export default mySlice.reducer;
