import { PlusIcon } from "@heroicons/react/16/solid";
import { RootState } from "../../../redux/store";
import React from "react";
import { useSelector } from "react-redux";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}
const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  const { isOpen } = useSelector((state: RootState) => state.modal);

  if (!isOpen) return null;

  return (
    <div className={"modal_cont"}>
      <div className={`modal_datas ${!isOpen ? "slideInDown" : "slideOutUp"}`}>
        <div className="modal_head">
          <div className="icon_cont">
            <PlusIcon onClick={onClose} className="icon rotate-45" />
          </div>
        </div>

        <div className="modal_body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
