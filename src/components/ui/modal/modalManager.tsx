import React from "react";
import Modal from "./modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { closeModal } from "../../../redux/features/modal/modalSlice";

const ModalManager: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen, children } = useSelector((state: RootState) => state.modal);

  if (!isOpen) return null;

  return <Modal onClose={() => dispatch(closeModal())}>{children}</Modal>;
};

export default ModalManager;
