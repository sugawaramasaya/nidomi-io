import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  variant?: "primary" | "secondary"; // ← ここでvariantをprimary/secondaryに
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary", // ← デフォルトはprimary
  disabled = false,
  fullWidth = false,
  className = "",
  type = "button",
  onClick,
}) => {
  // カラートークンをvariantで分岐
  const mainColor = variant === "secondary" ? "var(--secondary)" : "var(--primary)";
  const onMainColor = variant === "secondary" ? "var(--on-secondary)" : "var(--on-primary)";

  return (
    <span
      className={[
        "inline-block",
        fullWidth ? "w-full" : "",
        "min-h-[40px] min-w-[40px]",
        "rounded-[var(--radius-full)]",
        "relative"
      ].join(" ")}
      style={{ position: "relative", width: fullWidth ? "100%" : undefined }}
    >
      {/* surface下地 */}
      <span
        className="absolute left-0 top-0 w-full h-full rounded-[var(--radius-full)]"
        style={{
          background: "var(--surface)",
          borderRadius: "var(--radius-full)",
          inset: 0,
          zIndex: 0
        }}
        aria-hidden="true"
      />
      {/* mainColorレイヤー */}
      <span
        className="absolute left-0 top-0 w-full h-full rounded-[var(--radius-full)]"
        style={{
          background: mainColor,
          borderRadius: "var(--radius-full)",
          inset: 0,
          zIndex: 1,
          opacity: disabled ? 0.1 : 1,
          pointerEvents: "none"
        }}
        aria-hidden="true"
      />
      {/* ボタン本体 */}
      <button
        type={type}
        className={[
          "relative z-10",
          "inline-flex items-center justify-center",
          "select-none transition-colors duration-150",
          "border-none outline-none",
          "rounded-[var(--radius-full)]",
          "font-[var(--font-weight-medium-bold)]",
          "font-[var(--font-family-base)]",
          "text-[var(--font-size-medium)]",
          "leading-[var(--line-height-medium)]",
          "min-h-[40px] min-w-[40px]",
          fullWidth ? "w-full" : "",
          disabled ? "cursor-not-allowed" : "",
          className
        ].join(" ")}
        style={{
          borderRadius: "var(--radius-full)",
          background: "transparent",
          color: onMainColor,
          fontFamily: "var(--font-family-base)",
          fontWeight: 700,
          fontSize: "var(--font-size-medium)",
          lineHeight: "var(--line-height-medium)",
          minHeight: 40,
          minWidth: 40,
          width: fullWidth ? "100%" : undefined,
          padding: "var(--space-8) var(--space-16)",
          cursor: disabled ? "not-allowed" : "pointer",
          transition: "opacity 0.15s"
        }}
        disabled={disabled}
        onClick={onClick}
      >
        <span
          style={{
            display: "inline-block",
            paddingLeft: "var(--space-8)",
            paddingRight: "var(--space-8)",
            width: "100%",
            boxSizing: "border-box",
            textAlign: "center",
            lineHeight: "40px",
            opacity: disabled ? 0.1 : 1,
            transition: "opacity 0.15s"
          }}
        >
          {children}
        </span>
      </button>
    </span>
  );
};

export default Button;