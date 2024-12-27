import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../utilities/axios";

const initialState = {
  musics: [],
  isloading: false,
  error: null as string | null,
};

const uploadMusic = createAsyncThunk("music/uploadMusic", async (data) => {
  try {
    const response = await axiosInstance.post("/music", data);
    return response.data;
  } catch (error) {
    return error;
  }
});

const getAllMusic = createAsyncThunk("music/getAllMusic", async () => {
  try {
    const response = await axiosInstance.get("/music");
    return response.data;
  } catch (error) {
    return error;
  }
});

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadMusic.pending, (state) => {
        state.isloading = true;
        state.error = null;
      })
      .addCase(uploadMusic.fulfilled, (state, action) => {
        state.isloading = false;
        state.musics = action.payload;
      })
      .addCase(uploadMusic.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.error.message ?? null;
      });

    builder
      .addCase(getAllMusic.pending, (state) => {
        state.isloading = true;
        state.error = null;
      })
      .addCase(getAllMusic.fulfilled, (state, action) => {
        state.isloading = false;
        state.musics = action.payload;
      })
      .addCase(getAllMusic.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.error.message ?? null;
      });
  },
});
