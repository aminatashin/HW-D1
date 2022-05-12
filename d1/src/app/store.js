import { configureStore } from "@reduxjs/toolkit";
import favReducer from "../slice/favSlice";

export default configureStore({
  reducer: {
    fave: favReducer,
  },
});
