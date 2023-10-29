interface InputType {
  label: string;
  textarea?: boolean;
}

export default function Input({ label, textarea, ...props }: InputType) {
  return (
    <p>
      <label htmlFor="">{label}</label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}
