import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../utilities/axios";

const initialState = {
  artists: [],
  isloading: false,
  error: null as string | null,
};

export const getAllArtist = createAsyncThunk(
  "artist/getAllArtist",
  async () => {
    try {
      const response = await axiosInstance.get("/artist");
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const artistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllArtist.pending, (state) => {
        state.isloading = true;
      })
      .addCase(getAllArtist.fulfilled, (state, action) => {
        state.isloading = false;
        state.artists = action.payload;
      })
      .addCase(getAllArtist.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export default artistSlice.reducer;
