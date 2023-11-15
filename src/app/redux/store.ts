import { configureStore } from "@reduxjs/toolkit";
// import forecastSlice from "./slice/forecastSlice";
import reactotron from "../../../ReactotronConfig";
import { forecastApi } from "./apiSlice";

// import devToolsEnhancer from "remote-redux-devtools";

declare const window: any & typeof globalThis;

export const store = configureStore({
  reducer: {
    // forecast: forecastSlice,
    [forecastApi.reducerPath]: forecastApi.reducer,
  },
  // enhancers: [devToolsEnhancer({ realtime: true, port: 8000 })],
  devTools: __DEV__,
  enhancers: [reactotron.createEnhancer()],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(forecastApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
