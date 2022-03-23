import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { apiSLice } from "../features/counter/dogs/apiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSLice.reducerPath]: apiSLice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSLice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
