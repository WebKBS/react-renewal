import React, { useEffect, useState } from "react";

interface DeleteConfirmationProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const TIMER = 3000;

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  onConfirm,
  onCancel,
}) => {
  const [remaingTime, setRemaingTime] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Timer");
      setRemaingTime((prevTime: number) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
      <progress value={remaingTime} max={TIMER} />
    </div>
  );
};

export default DeleteConfirmation;
