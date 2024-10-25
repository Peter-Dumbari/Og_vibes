import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
  isLoading: false,
  error: null,
  message: null,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers,
  extraReducers,
});

export default eventSlice.reducer;
