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
  inputRef?: React.RefObject<HTMLInputElement>; // ← 追加
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
  inputRef, // ← 追加
}) => {
  const [focused, setFocused] = useState(false);
  const inputId = id || `textfield-${Math.random().toString(36).slice(2, 9)}`;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const internalInputRef = useRef<HTMLInputElement>(null);

  // カウンター表示
  const counter =
    typeof maxLength === "number"
      ? `${value.length} / ${maxLength}`
      : undefined;
  const showError = error && !!errorMessage;
  const showHelper = (!!helperText || !!counter) && !showError;

  // Dividerカラー
  const dividerColor = focused ? "var(--outline)" : "var(--outline-variant)";

  // Disabled時のopacity
  const opacity = disabled ? 0.2 : 1;

  // textareaの高さ自動調整
  useEffect(() => {
    if (variant !== "password" && textareaRef.current) {
      const el = textareaRef.current;
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
    }
  }, [value, variant]);

  return (
    <div
      className={className}
      style={{
        minHeight: 56,
        opacity,
        userSelect: disabled ? "none" : undefined,
      }}
    >
      <label
        htmlFor={inputId}
        style={{
          color: "var(--on-surface-variant)",
          fontFamily: "var(--font-family-base)",
          fontWeight: 700,
          fontSize: "var(--font-size-medium)",
          lineHeight: "var(--line-height-medium)",
          marginBottom: 8,
          display: "block",
        }}
      >
        {label}
      </label>
      <div
        style={{
          minHeight: 56,
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        {variant === "password" ? (
          <input
            className={clsx("textfield-input", className)}
            id={inputId}
            type={type || "password"}
            value={value}
            onChange={(e) => {
              if (!disabled) onChange(e.target.value);
            }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            style={{
              width: "100%",
              minHeight: 40,
              height: "auto",
              fontFamily: "var(--font-family-base)",
              fontWeight: 700,
              fontSize: "var(--font-size-large)",
              lineHeight: "var(--line-height-large)",
              background: "transparent",
              border: "none",
              outline: "none",
              padding: 0,
              marginBottom: 8,
              boxSizing: "border-box",
              overflowWrap: "break-word",
              wordBreak: "break-word",
            }}
            aria-invalid={error}
            aria-describedby={
              showError
                ? `${inputId}-error`
                : showHelper
                ? `${inputId}-helper`
                : undefined
            }
            autoComplete={autoComplete || "off"}
            spellCheck={false}
            ref={inputRef || internalInputRef} // ← 外部から渡されてなければ内部で用意したrefを使う
          />
        ) : (
          <textarea
            className="textfield-input"
            ref={textareaRef}
            id={inputId}
            value={value}
            onChange={(e) => {
              if (!disabled) onChange(e.target.value);
            }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            style={{
              width: "100%",
              minHeight: 40,
              height: "auto",
              resize: "none",
              fontFamily: "var(--font-family-base)",
              fontWeight: 700,
              fontSize: "var(--font-size-large)",
              lineHeight: "var(--line-height-large)",
              background: "transparent",
              border: "none",
              outline: "none",
              padding: 0,
              marginBottom: 8,
              overflowWrap: "break-word",
              wordBreak: "break-word",
              boxSizing: "border-box",
            }}
            aria-invalid={error}
            aria-describedby={
              showError
                ? `${inputId}-error`
                : showHelper
                ? `${inputId}-helper`
                : undefined
            }
            rows={1}
            autoComplete={autoComplete || "off"}
            spellCheck={false}
          />
        )}
      </div>
      <div
        style={{
          width: "100%",
          height: 2,
          borderRadius: 999,
          background: dividerColor,
          marginBottom: 12,
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {showError && (errorMessage || counter) && (
          <span
            id={`${inputId}-error`}
            style={{
              color: "var(--error)",
              fontFamily: "var(--font-family-base)",
              fontWeight: 700,
              fontSize: "var(--font-size-small)",
              lineHeight: "var(--line-height-small)",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            {errorMessage}
            {counter && (
              <span style={{ marginLeft: errorMessage ? 8 : 0 }}>
                {counter}
              </span>
            )}
          </span>
        )}
        {showHelper && (helperText || counter) && (
          <span
            id={`${inputId}-helper`}
            style={{
              color: "var(--on-surface)",
              fontFamily: "var(--font-family-base)",
              fontWeight: 700,
              fontSize: "var(--font-size-small)",
              lineHeight: "var(--line-height-small)",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            {helperText}
            {counter && (
              <span style={{ marginLeft: helperText ? 8 : 0 }}>{counter}</span>
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default TextField;
