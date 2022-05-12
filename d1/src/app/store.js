import { configureStore } from "@reduxjs/toolkit";
import faveReducer from "../slice/favSlice";
import jobReducer from "../slice/jobSlice";
import userReducer from "../slice/userSlice";

export default configureStore({
  reducer: {
    fave: faveReducer,
    job: jobReducer,
    user: userReducer,
  },
});
