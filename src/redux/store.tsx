import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modal/modalSlice";
import blogReducer from "./features/blogs/blogSlice";
import artistReducer from "./features/artists/artistSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    blogs: blogReducer,
    artists: artistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
