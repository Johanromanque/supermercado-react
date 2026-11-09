function FormField({ id, label, error, children, required = true }) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-slate-800"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {children}

      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 text-xs font-semibold text-red-600"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default FormField;
