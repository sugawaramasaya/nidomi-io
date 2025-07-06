import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";

// Enhanced type definitions for better type safety
export type TextFieldType = 
  | "text" 
  | "email" 
  | "password" 
  | "tel" 
  | "url" 
  | "number" 
  | "search";

export type TextFieldVariant = "default" | "password";

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
  type?: TextFieldType;
  variant?: TextFieldVariant;
  className?: string;
  id?: string;
  autoComplete?: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  onFocus?: () => void;
  onBlur?: () => void;
};

// Utility functions for better code organization
const generateId = (): string => {
  return `textfield-${Math.random().toString(36).slice(2, 9)}`;
};

const getInputType = (type?: TextFieldType, variant?: TextFieldVariant): string => {
  if (variant === "password") {
    return type === "password" ? "password" : "password";
  }
  return type || "text";
};

// Style configuration object for easier maintenance
const styles = {
  container: (opacity: number, disabled: boolean) => ({
    opacity,
    userSelect: disabled ? "none" as const : undefined,
  }),
  label: {
    color: "var(--on-surface-variant)",
    fontFamily: "var(--font-family-base)",
    fontWeight: "var(--font-weight-bold)",
    fontSize: "var(--font-size-medium)",
    lineHeight: "var(--line-height-medium)",
    marginBottom: 8,
    display: "block" as const,
  },
  inputContainer: {
    display: "flex" as const,
    alignItems: "center" as const,
    width: "100%" as const,
  },
  input: {
    display: "inline-block" as const,
    width: "100%" as const,
    height: "auto" as const,
    fontFamily: "var(--font-family-base)",
    fontWeight: "var(--font-weight-bold)",
    fontSize: "var(--font-size-large)",
    lineHeight: "var(--line-height-large)",
    color: "var(--on-surface)",
    background: "transparent",
    border: "none",
    outline: "none",
    padding: "14px 0",
    marginBottom: 8,
    boxSizing: "border-box" as const,
    overflowWrap: "break-word" as const,
    wordBreak: "break-word" as const,
  },
  textarea: {
    resize: "none" as const,
  },
  divider: (dividerColor: string) => ({
    width: "100%",
    height: 2,
    borderRadius: 999,
    background: dividerColor,
    marginBottom: 12,
  }),
  messageContainer: {
    display: "flex" as const,
    flexDirection: "column" as const,
    gap: 4,
  },
  message: {
    fontFamily: "var(--font-family-base)",
    fontWeight: "var(--font-weight-bold)",
    fontSize: "var(--font-size-small)",
    lineHeight: "var(--line-height-small)",
    display: "flex" as const,
    alignItems: "center" as const,
    gap: 8,
  },
  errorMessage: {
    color: "var(--error)",
  },
  helperMessage: {
    color: "var(--on-surface)",
  },
  counter: (hasMessage: boolean) => ({
    marginLeft: hasMessage ? 8 : 0,
  }),
};

// Component for rendering input/textarea
interface InputElementProps {
  variant: TextFieldVariant;
  inputId: string;
  value: string;
  onChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  placeholder: string;
  disabled: boolean;
  maxLength?: number;
  type: string;
  className: string;
  error: boolean;
  showError: boolean;
  showHelper: boolean;
  autoComplete: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  internalInputRef: React.RefObject<HTMLInputElement | null>;
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
}

const InputElement: React.FC<InputElementProps> = ({
  variant,
  inputId,
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  disabled,
  maxLength,
  type,
  className,
  error,
  showError,
  showHelper,
  autoComplete,
  inputRef,
  internalInputRef,
  textareaRef,
}) => {
  const commonProps = {
    id: inputId,
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (!disabled) onChange(e.target.value);
    },
    onFocus,
    onBlur,
    placeholder,
    disabled,
    maxLength,
    style: {
      ...styles.input,
      ...(variant !== "password" ? styles.textarea : {}),
    },
    "aria-invalid": error,
    "aria-describedby": showError
      ? `${inputId}-error`
      : showHelper
      ? `${inputId}-helper`
      : undefined,
    autoComplete,
    spellCheck: false,
  };

  if (variant === "password") {
    return (
      <input
        {...commonProps}
        className={clsx("textfield-input", className)}
        type={type}
        ref={inputRef || internalInputRef}
      />
    );
  }

  return (
    <textarea
      {...commonProps}
      className="textfield-input"
      ref={textareaRef}
      rows={1}
    />
  );
};

// Component for rendering messages (helper text, error message, counter)
interface MessageDisplayProps {
  inputId: string;
  showError: boolean;
  showHelper: boolean;
  errorMessage?: string;
  helperText?: string;
  counter?: string;
}

const MessageDisplay: React.FC<MessageDisplayProps> = ({ inputId, showError, showHelper, errorMessage, helperText, counter }) => {
  if (!showError && !showHelper) return null;

  return (
    <div style={styles.messageContainer}>
      {showError && (errorMessage || counter) && (
        <span
          id={`${inputId}-error`}
          style={{
            ...styles.message,
            ...styles.errorMessage,
          }}
        >
          {errorMessage}
          {counter && (
            <span style={styles.counter(!!errorMessage)}>
              {counter}
            </span>
          )}
        </span>
      )}
      {showHelper && (helperText || counter) && (
        <span
          id={`${inputId}-helper`}
          style={{
            ...styles.message,
            ...styles.helperMessage,
          }}
        >
          {helperText}
          {counter && (
            <span style={styles.counter(!!helperText)}>
              {counter}
            </span>
          )}
        </span>
      )}
    </div>
  );
};

/**
 * TextField Component
 * 
 * A flexible text input component supporting both single-line and multi-line input.
 * Automatically switches between input and textarea based on variant.
 * 
 * @param label - The label text for the field
 * @param value - The current value of the field
 * @param onChange - Callback function called when the value changes
 * @param placeholder - Placeholder text
 * @param disabled - Whether the field is disabled
 * @param error - Whether the field has an error state
 * @param helperText - Helper text displayed below the field
 * @param errorMessage - Error message displayed when in error state
 * @param maxLength - Maximum number of characters allowed
 * @param type - Input type (text, email, password, etc.)
 * @param variant - Field variant (default or password)
 * @param className - Additional CSS classes
 * @param id - Custom id for the field
 * @param autoComplete - Autocomplete attribute value
 * @param inputRef - External ref for the input element
 * @param onFocus - Callback when field gains focus
 * @param onBlur - Callback when field loses focus
 */
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
  const inputId = id || generateId();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const internalInputRef = useRef<HTMLInputElement | null>(null);

  // Calculate derived state
  const counter = typeof maxLength === "number" 
    ? `${value.length} / ${maxLength}` 
    : undefined;
  const showError = error && !!errorMessage;
  const showHelper = (!!helperText || !!counter) && !showError;
  const dividerColor = focused ? "var(--outline)" : "var(--outline-variant)";
  const opacity = disabled ? 0.2 : 1;
  const inputType = getInputType(type, variant);

  // Auto-resize textarea
  useEffect(() => {
    if (variant !== "password" && textareaRef.current) {
      const el = textareaRef.current;
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
    }
  }, [value, variant]);

  // Focus/blur handlers
  const handleFocus = () => {
    setFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setFocused(false);
    onBlur?.();
  };

  return (
    <div
      className={className}
      style={styles.container(opacity, disabled)}
    >
      <label
        htmlFor={inputId}
        style={styles.label}
      >
        {label}
      </label>
      
      <div style={styles.inputContainer}>
        <InputElement
          variant={variant}
          inputId={inputId}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          type={inputType}
          className={className}
          error={error}
          showError={showError}
          showHelper={showHelper}
          autoComplete={autoComplete || "off"}
          inputRef={inputRef}
          internalInputRef={internalInputRef}
          textareaRef={textareaRef}
        />
      </div>
      
      <div style={styles.divider(dividerColor)} />
      
      <MessageDisplay
        inputId={inputId}
        showError={showError}
        showHelper={showHelper}
        errorMessage={errorMessage}
        helperText={helperText}
        counter={counter}
      />
    </div>
  );
};

export default TextField;
