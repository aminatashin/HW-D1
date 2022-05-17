import { configureStore, combineReducers } from "@reduxjs/toolkit";
import faveReducer from "../slice/favSlice";
import jobReducer from "../slice/jobSlice";
import userReducer from "../slice/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
const reducers = combineReducers({
  fave: faveReducer,
  job: jobReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
  transforms: [
    encryptTransform({
      secretKey: "amin-knows-what-number432",
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
});
