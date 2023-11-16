import { configureStore } from "@reduxjs/toolkit";
// import forecastSlice from "./slice/forecastSlice";
import reactotron from "../../../ReactotronConfig";
import { weatherApi } from "./apiSlice";

// import devToolsEnhancer from "remote-redux-devtools";

declare const window: any & typeof globalThis;

export const store = configureStore({
  reducer: {
    // forecast: forecastSlice,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  // enhancers: [devToolsEnhancer({ realtime: true, port: 8000 })],
  devTools: __DEV__,
  enhancers: [reactotron.createEnhancer()],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
