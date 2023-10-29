import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

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
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    modal
  );
});

export default Modal;
