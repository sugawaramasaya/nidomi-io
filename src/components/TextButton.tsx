import React from "react";

type TextButtonProps = {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "large" | "medium";
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const TextButton: React.FC<TextButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  fullWidth = false,
  className = "",
  type = "button",
  onClick,
}) => {
  // カラートークン
  const labelColor = variant === "secondary"
    ? "var(--on-surface-variant)"
    : "var(--on-surface)";
  const fontSize = size === "large" ? "var(--font-size-large)" : "var(--font-size-medium)";
  const lineHeight = size === "large" ? "var(--line-height-large)" : "var(--line-height-medium)";

  return (
    <button
      type={type}
      className={[
        "inline-flex items-center justify-center",
        "select-none transition-colors duration-150",
        "border-none outline-none bg-transparent",
        "font-[var(--font-weight-medium-bold)]",
        "font-[var(--font-family-base)]",
        "min-h-[40px] min-w-[40px]",
        fullWidth ? "w-full" : "",
        disabled ? "cursor-not-allowed" : "",
        className
      ].join(" ")}
      style={{
        width: fullWidth ? "100%" : undefined,
        height: 56,
        padding: "var(--space-8) var(--space-16)",
        borderRadius: "var(--radius-full)",
        background: "transparent",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.1 : 1,
        transition: "opacity 0.15s"
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
          height: 40,
          color: labelColor,
        fontFamily: "var(--font-family-base)",
        fontWeight: 700,
        fontSize,
        lineHeight,
          opacity: 1,
          transition: "opacity 0.15s"
        }}
      >
        {children}
      </span>
    </button>
  );
};

export default TextButton;
