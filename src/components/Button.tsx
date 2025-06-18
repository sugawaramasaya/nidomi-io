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
      className={`relative inline-flex items-center justify-center select-none border-none outline-none overflow-hidden ${
        fullWidth ? "w-full" : ""
      } ${disabled ? "cursor-not-allowed" : ""} ${className}`}
      style={{
        width: fullWidth ? "100%" : undefined,
        borderRadius: "var(--radius-full)",
        fontFamily: "var(--font-family-base)",
        fontWeight: "var(--font-weight-bold)",
        fontSize,
        lineHeight,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {/* 常に表示される surface 背景レイヤー */}
      <div
        className="absolute inset-0"
        style={{
          background: "var(--surface)",
          borderRadius: "var(--radius-full)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ボタン背景レイヤー（variantに応じた背景色 & padding） */}
      <div
        className="relative z-10 w-full inline-flex items-center justify-center"
        style={{
          background: isText ? "transparent" : mainColor,
          borderRadius: "var(--radius-full)",
          padding: "var(--space-8) var(--space-16)",
          opacity: disabled ? 0.1 : 1,
          transition: "opacity 0.15s",
        }}
      >
        {/* ラベル */}
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40px",
            paddingLeft: "var(--space-8)",
            paddingRight: "var(--space-8)",
            textAlign: "center",
            color: onMainColor,
          }}
        >
          {children}
        </span>
      </div>
    </button>
  );
};

export default Button;
