import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  children: React.ReactNode | null;
}
const initialState: ModalState = {
  isOpen: false,
  children: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{ title: string; content: React.ReactNode }>
    ) => {
      state.isOpen = true;
      state.children = action.payload.content;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.children = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
