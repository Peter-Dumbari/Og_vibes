import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modal/modalSlice";
import blogReducer from "./features/blogs/blogSlice";
import artistReducer from "./features/artists/artistSlice";
import musicReducer from "./features/musics/musicSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    music: musicReducer,
    blogs: blogReducer,
    artists: artistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
