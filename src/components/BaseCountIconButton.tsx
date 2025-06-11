import React from "react";

type BaseCountIconButtonProps = {
  checked: boolean;
  count: number;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  renderIcon: (checked: boolean, size: number, color: string) => React.ReactNode;
};

const BaseCountIconButton: React.FC<BaseCountIconButtonProps> = ({
  checked,
  count,
  disabled = false,
  className = "",
  type = "button",
  onClick,
  renderIcon,
}) => {
  const iconColor = "var(--on-surface-variant)";
  const countColor = iconColor;
  const size = 40;

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
        {renderIcon(checked, size, iconColor)}
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

export default BaseCountIconButton;
