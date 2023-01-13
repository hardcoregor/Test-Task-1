import { configureStore } from "@reduxjs/toolkit";

import newsSlice from "./features/news/newsSlice";

const store = configureStore({
  reducer: newsSlice,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;