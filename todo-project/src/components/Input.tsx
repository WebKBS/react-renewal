import { forwardRef, ForwardedRef } from "react";

interface InputType {
  label: string;
  textarea?: boolean;
  type?: string;
}

const Input = forwardRef(function Input(
  { label, textarea, ...props }: InputType,
  ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>
) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label htmlFor="" className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea
          ref={ref as React.RefObject<HTMLTextAreaElement>}
          className={classes}
          {...props}
        />
      ) : (
        <input
          ref={ref as React.RefObject<HTMLInputElement>}
          className={classes}
          {...props}
        />
      )}
    </p>
  );
});

export default Input;
