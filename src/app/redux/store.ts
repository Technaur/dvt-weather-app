import { configureStore } from "@reduxjs/toolkit";
import forecastSlice from "./slice/forecastSlice";
import reactotron from "../../../ReactotronConfig";

// import devToolsEnhancer from "remote-redux-devtools";

declare const window: any & typeof globalThis;

export const store = configureStore({
  reducer: {
    forecast: forecastSlice,
  },
  // enhancers: [devToolsEnhancer({ realtime: true, port: 8000 })],
  devTools: true,
  enhancers: [reactotron.createEnhancer()],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
