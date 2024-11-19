import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import { userApi } from "./services/user";
import { formApi } from "./services/form";
export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice,

      [userApi.reducerPath]: userApi.reducer,
      [formApi.reducerPath]: formApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userApi.middleware, formApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
