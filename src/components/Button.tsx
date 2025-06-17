// src/components/Button.tsx
import React from "react";

export type ButtonProps = {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "text-primary" | "text-secondary";
  size?: "large" | "medium";
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({
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
      type={type}
      className={`inline-flex items-center justify-center select-none transition-colors duration-150 border-none outline-none rounded-[var(--radius-full)] min-h-[40px] min-w-[40px] ${
        fullWidth ? "w-full" : ""
      } ${disabled ? "cursor-not-allowed" : ""} ${className}`}
      style={{
        width: fullWidth ? "100%" : undefined,
        padding: "var(--space-8) var(--space-16)",
        borderRadius: "var(--radius-full)",
        background: disabled
          ? "var(--surface)"
          : isText
          ? "transparent"
          : mainColor,
        color: onMainColor,
        fontFamily: "var(--font-family-base)",
        fontWeight: "var(--font-weight-bold)",
        fontSize,
        lineHeight,
        opacity: disabled ? 0.1 : 1,
        transition: "opacity 0.15s",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      disabled={disabled}
      onClick={onClick}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "40px", // 高さ固定
          paddingLeft: "var(--space-8)",
          paddingRight: "var(--space-8)",
          textAlign: "center",
        }}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
