import React, { useEffect } from "react";
import ProgressBar from "./ProgressBar";

interface DeleteConfirmationProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const TIMER = 3000;

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  onConfirm,
  onCancel,
}) => {
  useEffect(() => {
    console.log("timer!");

    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      clearInterval(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  );
};

export default DeleteConfirmation;
