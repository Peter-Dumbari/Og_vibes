import React from "react";
import Modal from "./modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { closeModal } from "../../../redux/features/modal/modalSlice";

const ModalManager: React.FC = () => {
  const dispatch = useDispatch();
  const { children } = useSelector((state: RootState) => state.modal);

  return <Modal onClose={() => dispatch(closeModal())}>{children}</Modal>;
};

export default ModalManager;
