import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export type ModalRef = {
  open: () => void;
};

const Modal = forwardRef(function Modal(
  {
    children,
    buttonCaption,
  }: {
    children: React.ReactNode;
    buttonCaption: string;
  },
  ref
) {
  const dialog = useRef<HTMLDialogElement | null>(null);
  const modal = document.getElementById("modal-root") as HTMLDivElement;
  useImperativeHandle(ref, () => {
    return {
      open() {
        if (dialog.current) {
          dialog.current.showModal();
        }
      },
    };
  });

  return createPortal(
    <dialog ref={dialog}>
      {children}
      <form method="dialog">
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    modal
  );
});

export default Modal;
