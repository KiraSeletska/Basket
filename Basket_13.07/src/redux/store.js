import { configureStore } from "@reduxjs/toolkit";
import { sliceApi } from "./apiSlice";
import { basketReducer } from "./basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    [sliceApi.reducerPath]: sliceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>//возбмт дефщдтный Middleware и доавть sliceApi.middleware
    getDefaultMiddleware().concat(sliceApi.middleware),
});
