import { createSlice } from "@reduxjs/toolkit";
import { Language } from "../Header";

const language = localStorage.getItem("i18nextLng") || Language.UZB;

const initialState = {
  isClose: true,
  currentLng: "uz",
  isOpen: false,
  currentLanguage: language,
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
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setCurrentLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { setIsClose, setCurrentLng, setIsOpen, setCurrentLanguage } =
  mySlice.actions;
export default mySlice.reducer;
