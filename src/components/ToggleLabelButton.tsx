import React from "react";

export type ToggleLabelButtonProps = {
  checked: boolean;
  labelChecked: string;
  labelUnchecked: string;
  colorChecked: string;
  colorUnchecked: string;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  height?: number;
  padding?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: number;
};

const ToggleLabelButton: React.FC<ToggleLabelButtonProps> = ({
  checked,
  labelChecked,
  labelUnchecked,
  colorChecked,
  colorUnchecked,
  disabled = false,
  className = "",
  type = "button",
  onClick,
  height = 56,
  padding = "var(--space-8) var(--space-16)",
  fontSize = "var(--font-size-large)",
  lineHeight = "var(--line-height-large)",
  fontWeight = 700,
}) => {
  const label = checked ? labelChecked : labelUnchecked;
  const color = checked ? colorChecked : colorUnchecked;

  return (
    <button
      type={type}
      className={[
        "inline-flex items-center justify-center",
        "select-none transition-colors duration-150",
        "border-none outline-none bg-transparent",
        "rounded-[var(--radius-full)]",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        className
      ].join(" ")}
      style={{
        height,
        padding,
        borderRadius: "var(--radius-full)",
        background: "transparent",
        opacity: disabled ? 0.1 : 1,
        userSelect: "none",
        transition: "opacity 0.15s"
      }}
      disabled={disabled}
      onClick={onClick}
      aria-pressed={checked}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: 40,
          color,
          fontFamily: "var(--font-family-base)",
          fontWeight,
          fontSize,
          lineHeight
        }}
      >
        {label}
      </span>
    </button>
  );
};

export default ToggleLabelButton;
