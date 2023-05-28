import { Middleware, MiddlewareAPI, configureStore } from "@reduxjs/toolkit";

import { countriesApi } from "./api/countriesApi";

export const rtkQueryDelay: Middleware =
  (_api: MiddlewareAPI) => (next) => (action) =>
    setTimeout(() => next(action), 1500);

export const store = configureStore({
  reducer: {
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      countriesApi.middleware,
      rtkQueryDelay
    ),
});

export const dispatch = store.dispatch;
