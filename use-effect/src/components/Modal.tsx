import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalRef {
  open: () => void;
  close: () => void;
}

const Modal = forwardRef<ModalRef, { children: React.ReactNode }>(
  function Modal({ children }, ref) {
    const dialog = useRef<HTMLDialogElement | null>(null);

    useImperativeHandle(ref, () => ({
      open: () => {
        if (dialog.current) {
          dialog.current.showModal();
        }
      },
      close: () => {
        if (dialog.current) {
          dialog.current.close();
        }
      },
    }));

    return createPortal(
      <dialog className="modal" ref={dialog}>
        {children}
      </dialog>,
      document.getElementById("modal") as HTMLDialogElement
    );
  }
);

export default Modal;
