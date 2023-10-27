export default function Input({
  label,
  invalid,
  ...props
}: {
  label: string;
  invalid: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";

  let inputClasses =
    "w-full px-3 py-2 leading-tight bg-stone-300 border rounded shadow";

  if (invalid) {
    labelClasses += " text-red-400"; // 반드시 띄어쓰기가 있어야한다.
    inputClasses += " text-red-500 bg-red-100 border-red-300";
  } else {
    labelClasses += " text-stone-300";
    inputClasses += " text-gray-700 bg-stone-300";
  }

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
  );
}
