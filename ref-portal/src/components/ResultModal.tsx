import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef<
  { showModal: () => void },
  { result: string; targetTime: number }
>(({ result, targetTime }, ref) => {
  const dialog = useRef<HTMLDialogElement | null>(null);

  useImperativeHandle(ref, () => ({
    showModal: () => {
      if (dialog.current) {
        dialog.current.showModal();
      }
    },
  }));

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
