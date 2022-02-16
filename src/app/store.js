import { configureStore } from "@reduxjs/toolkit";

// import appReducer from "app/local/app";
// import userReducer from "app/local/user";
import counterReducer from "../pages/features/counter/counterSlice";
import appReducer from "./local/appSlice";

// import userReducer from "./local/userSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    // user: userReducer,
    counter: counterReducer,
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(mockApi.middleware),
});
