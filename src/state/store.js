import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import globalReducer from "./index";

import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { userApi } from "./userApi";
import { authApi } from "./authAPI";
import authReducer from "./authSlice";
import { orderApi } from "./orderApi";
import { walletApi } from "./walletApi";
import { withdrawApi } from "./withdrawApi";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [walletApi.reducerPath]: walletApi.reducer,
    [withdrawApi.reducerPath]: withdrawApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(
      userApi.middleware,
      authApi.middleware,
      orderApi.middleware,
      walletApi.middleware,
      withdrawApi.middleware
    ),
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([])
  devTools: true,
});

setupListeners(store.dispatch);

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
export const AppDispatch = store.dispatch;
