import React from "react";

type TextFieldProps = {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  type?: string;
  variant?: "filled" | "outlined";
  className?: string;
  id?: string;
};

const TextField: React.FC<TextFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  disabled = false,
  error = false,
  helperText,
  type = "text",
  variant = "filled",
  className = "",
  id,
}) => {
  const inputId = id || `textfield-${Math.random().toString(36).slice(2, 9)}`;

  // スタイル分岐
  const base =
    "w-full px-4 py-3 text-[16px] rounded-[8px] outline-none transition-colors duration-150";
  const filled =
    "bg-[var(--surface-variant)] border border-transparent focus:bg-[var(--surface)]";
  const outlined =
    "bg-transparent border border-[var(--outline-variant)] focus:border-[var(--primary)]";
  const errorStyle =
    "border-[var(--error)] focus:border-[var(--error)] bg-[var(--error-container)]";
  const disabledStyle = "opacity-50 cursor-not-allowed";

  const inputClass =
    base +
    " " +
    (variant === "filled" ? filled : outlined) +
    (error ? " " + errorStyle : "") +
    (disabled ? " " + disabledStyle : "");

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-[var(--on-surface-variant)] text-[14px] font-medium mb-1"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClass}
        aria-invalid={error}
        aria-describedby={helperText ? `${inputId}-helper` : undefined}
      />
      {helperText && (
        <span
          id={`${inputId}-helper`}
          className={`text-xs mt-1 ${
            error ? "text-[var(--error)]" : "text-[var(--on-surface-variant)]"
          }`}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default TextField;