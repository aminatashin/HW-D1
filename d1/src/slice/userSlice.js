import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
  },
  reducers: {
    addUser: (state, action) => {
      return {
        ...state,
        userName: action.payload,
      };
    },
  },
});
export default userSlice.reducer;
export const { addUser } = userSlice.reducer;
