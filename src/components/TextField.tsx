import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";

export type TextFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  errorMessage?: string;
  maxLength?: number;
  type?: string;
  variant?: "default" | "password";
  className?: string;
  id?: string;
  autoComplete?: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  onFocus?: () => void;
  onBlur?: () => void;
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChange,
  placeholder = "",
  disabled = false,
  error = false,
  helperText,
  errorMessage,
  maxLength,
  type,
  variant = "default",
  className = "",
  id,
  autoComplete,
  inputRef,
  onFocus,
  onBlur,
}) => {
  const [focused, setFocused] = useState(false);
  const inputId = id || `textfield-${Math.random().toString(36).slice(2, 9)}`;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const internalInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={clsx("flex flex-col", className)}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-[var(--on-surface)] text-medium mb-[var(--space-8)]"
        >
          {label}
        </label>
      )}
      {variant === "password" ? (
        <input
          id={inputId}
          ref={inputRef || internalInputRef}
          type={type}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
          onFocus={() => {
            setFocused(true);
            onFocus?.();
          }}
          onBlur={() => {
            setFocused(false);
            onBlur?.();
          }}
          onChange={(e) => onChange(e.target.value)}
          className={clsx(
            "px-[var(--space-16)] py-[var(--space-12)]",
            "rounded-[var(--radius-12)] border border-[var(--outline)]",
            "text-[var(--on-surface)] text-medium",
            "focus:border-[var(--outline-variant)]",
            disabled && "cursor-not-allowed opacity-50",
            error && "border-[var(--error)]",
            className
          )}
          style={{
            backgroundColor: "var(--surface)",
          }}
        />
      ) : (
        <textarea
          id={inputId}
          ref={textareaRef}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
          onFocus={() => {
            setFocused(true);
            onFocus?.();
          }}
          onBlur={() => {
            setFocused(false);
            onBlur?.();
          }}
          onChange={(e) => onChange(e.target.value)}
          className={clsx(
            "px-[var(--space-16)] py-[var(--space-12)]",
            "rounded-[var(--radius-12)] border border-[var(--outline)]",
            "text-[var(--on-surface)] text-medium",
            "focus:border-[var(--outline-variant)]",
            disabled && "cursor-not-allowed opacity-50",
            error && "border-[var(--error)]",
            className
          )}
          style={{
            backgroundColor: "var(--surface)",
            resize: "none",
          }}
        />
      )}
      {helperText && (
        <span className="text-[var(--on-surface-variant)] text-small mt-[var(--space-8)]">
          {helperText}
        </span>
      )}
      {errorMessage && error && (
        <span className="text-[var(--error)] text-small mt-[var(--space-8)]">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default TextField;
