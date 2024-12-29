import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../utilities/axios";

const initialState = {
  musics: [],
  isloading: false,
  error: null as string | null,
};

export const uploadMusic = createAsyncThunk(
  "music/uploadMusic",
  async (data) => {
    try {
      const response = await axiosInstance.post("/music", data);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const getAllMusic = createAsyncThunk("music/getAllMusic", async () => {
  try {
    const response = await axiosInstance.get("/music");
    return response.data;
  } catch (error) {
    return error;
  }
});

export const getMusic = createAsyncThunk(
  "music/getMusic",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`music/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateMusic = createAsyncThunk(
  "music/updateMusic",
  async (id, data) => {
    try {
      const response = await axiosInstance.put(`music/${id}`, data);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const deleteMusic = createAsyncThunk("music/deleteMusic", async (id) => {
  try {
    const response = await axiosInstance.delete(`music/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const commentMusic = createAsyncThunk(
  "music/commentMusic",
  async (id, data) => {
    try {
      const response = await axiosInstance.post(`comment/music/${id}`, data);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const updateCommentMusic = createAsyncThunk(
  "music/updateCommentMusic",
  async (musicId, comment) => {
    try {
      const response = await axiosInstance.put(
        `/comment/music/${musicId}/comments/${comment?.id}`,
        comment
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const deleteCommentMusic = createAsyncThunk(
  "music/deleteCommentMusic",
  async (musicId, commentId) => {
    try {
      const response = await axiosInstance.delete(
        `/comment/music/${musicId}/comments/${commentId}`
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

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

    builder
      .addCase(getMusic.pending, (state) => {
        state.isloading = true;
        state.error = null;
      })
      .addCase(getMusic.fulfilled, (state, action) => {
        state.isloading = false;
        state.musics = action.payload;
      })
      .addCase(getMusic.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.error.message ?? null;
      });

    builder
      .addCase(updateMusic.pending, (state) => {
        state.isloading = true;
        state.error = null;
      })
      .addCase(updateMusic.fulfilled, (state, action) => {
        state.isloading = false;
        state.musics = action.payload;
      })
      .addCase(updateMusic.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export default musicSlice.reducer;
