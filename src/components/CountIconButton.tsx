import React from "react";

// variant: filled/inverse, size: 40px固定, count: number, icon: React.ReactNode
// Figma: https://www.figma.com/design/pjwYh0evbCR17YmoGEy8VH/nidomi.io?node-id=3479-4131&t=PPYIONa8QKfaexzu-1

type CountIconButtonProps = {
  icon: React.ReactNode;
  count: number;
  variant?: "filled" | "inverse";
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const CountIconButton: React.FC<CountIconButtonProps> = ({
  icon,
  count,
  variant = "filled",
  disabled = false,
  size = 40,
  className = "",
  type = "button",
  onClick,
}) => {
  // Figmaトークンに基づく色分岐
  const iconColor =
    variant === "inverse"
      ? "var(--inverse-on-surface)"
      : "var(--on-surface)";
  const countColor = iconColor;

  return (
    <button
      type={type}
      className={[
        "inline-flex items-center justify-center",
        "select-none transition-colors duration-150",
        "border-none outline-none",
        "rounded-[var(--radius-full)]",
        disabled ? "cursor-not-allowed" : "",
        className
      ].join(" ")}
      style={{
        height: "unset",
        minWidth: "unset",
        padding: "var(--space-8)",
        borderRadius: "var(--radius-full)",
        color: iconColor,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.1 : 1,
        transition: "opacity 0.15s"
      }}
      disabled={disabled}
      onClick={onClick}
      aria-label="icon count button"
    >
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: size, height: size }}>
        {React.isValidElement(icon)
          ? React.cloneElement(icon, { style: { color: iconColor, width: size, height: size, ...icon.props.style } })
          : icon}
      </span>
      <span
        style={{
          color: countColor,
          padding: "0 var(--space-8)",
          fontFamily: "var(--font-family-base)",
          fontWeight: 700,
          fontSize: "var(--font-size-large)",
          lineHeight: "var(--line-height-large)",
          userSelect: "none"
        }}
      >
        {count}
      </span>
    </button>
  );
};

export default CountIconButton;
