import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../utilities/axios";

const initialState = {
  users: null,
  isLoading: false,
  error: null,
  message: null,
};

export const registerUser = createAsyncThunk(
  "user/registUser",
  async (user) => {
    try {
      const response = await axiosInstance.post("user/register", user);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const loginUser = createAsyncThunk("user/loginUser", async (user) => {
  try {
    const response = await axiosInstance.post("user/login", user);
    const authToken = response.token; // Get the token from the response
    localStorage.setItem("authToken", authToken); // Set the token in the local storage
    const loginData = response.data;
    localStorage.setItem("user", JSON.stringify(loginData)); // Set the user data in the local storage
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (userId, data) => {
    try {
      const response = await axiosInstance.put(`user/${userId}`, data);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const getUser = createAsyncThunk("user/getUser", async (userId) => {
  try {
    const response = await axiosInstance.get(`user/${userId}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export const getUsers = createAsyncThunk("user/getusers", async () => {
  try {
    const response = await axiosInstance.get("user");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (userId) => {
    try {
      const response = await axiosInstance.delete(`user/${userId}`);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers,
  extraReducers: (builder) => {
    // REGISTER USER BUILDER
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = "loading...";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.message = null;
      });

    // LOGIN USER BUILDER
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = "loading...";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(loginUser.rejected, () => {
        state.isLoading = false;
        state.error = action.payload;
        state.message = null;
      });
    // UPDATE USER BUILDER
    builder
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = "loading...";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.message = null;
      });

    // GET USER BUILDER
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = "loading...";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.message = null;
      });

    // GET ALL USERS BUILDER
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = "loading...";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.message = null;
      });

    // DELETE USER BUILDER
    builder
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = "loading...";
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = state.users.filter((user) => user.id !== action.meta.arg);
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.message = null;
      });
  },
});

export default authSlice.reducer;
