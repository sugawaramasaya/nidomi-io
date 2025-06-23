// src/components/Button.tsx
import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  fullWidth = false,
  className = "",
  type = "button",
  onClick,
}) => {
  const isText = variant.startsWith("text");

  const mainColor =
    variant === "primary"
      ? "var(--primary)"
      : variant === "secondary"
      ? "var(--secondary)"
      : "transparent";

  const onMainColor =
    variant === "primary"
      ? "var(--on-primary)"
      : variant === "secondary"
      ? "var(--on-secondary)"
      : variant === "text-secondary"
      ? "var(--on-surface-variant)"
      : "var(--on-surface)";

  const fontSize =
    size === "large" ? "var(--font-size-large)" : "var(--font-size-medium)";
  const lineHeight =
    size === "large" ? "var(--line-height-large)" : "var(--line-height-medium)";

  return (
    <button
      className={`relative inline-flex items-center justify-center select-none border-none outline-none overflow-hidden rounded-[var(--radius-full)] text-[var(--on-surface)] bg-[var(--surface)] ${
        fullWidth ? "w-full" : ""
      } ${disabled ? "cursor-not-allowed" : ""} ${className}`}
      style={{
        width: fullWidth ? "100%" : undefined,
        fontFamily: "var(--font-family-base)",
        fontWeight: "var(--font-weight-bold)",
        fontSize,
        lineHeight,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
