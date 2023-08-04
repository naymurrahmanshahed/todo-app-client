import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { todoApi } from "./features/todoApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

setupListeners(store.dispatch);
