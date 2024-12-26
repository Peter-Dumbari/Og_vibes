import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../utilities/axios";

const initialState = {
  blogs: [],
  isloading: false,
  error: null as string | null,
  message: null,
};

export const postBlog = createAsyncThunk("blog/postBlog", async (data) => {
  try {
    const response = await axiosInstance.post("/blogs", data);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const getBlog = createAsyncThunk(
  "blog/getBlog",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`blog/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAllBlogs = createAsyncThunk("blog/getAllBlogs", async () => {
  try {
    const response = await axiosInstance.get("/blog");
    return response.data;
  } catch (error) {
    return error;
  }
});

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postBlog.pending, (state) => {
        state.isloading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(postBlog.fulfilled, (state, action) => {
        state.isloading = false;
        state.message = action.payload.message;
      })
      .addCase(postBlog.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.error.message ?? null;
      });

    builder
      .addCase(getAllBlogs.pending, (state) => {
        state.isloading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.isloading = false;

        state.blogs = action.payload;
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.error.message ?? null;
      });

    builder
      .addCase(getBlog.pending, (state) => {
        state.isloading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.isloading = false;
        state.blogs = action.payload;
      })
      .addCase(getBlog.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export default blogSlice.reducer;
