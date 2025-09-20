import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface dataState {
  content: string;
}
const initialState: dataState = {
  content: sessionStorage.getItem("content") || "",
};
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
      window.sessionStorage.setItem("content", state.content);
    },
    setSymbol: (state, action: PayloadAction<string>) => {
      state.content += action.payload;
      window.sessionStorage.setItem("content", state.content);
    },
  },
});

export const { setData, setSymbol } = dataSlice.actions;

export default dataSlice.reducer;
