import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "fave",
  initialState: {
    content: [],
  },
  reducers: {
    addToFav: (state, action) => {
      return {
        content: [...state.content, action.payload],
      };
    },
  },
});
export default favSlice.reducer;
export const { addToFav } = favSlice.actions;
