import React, { ReactElement } from "react";

type FABProps = {
  icon: ReactElement<{ style?: React.CSSProperties }> | React.ReactNode;
  disabled?: boolean;
  size?: number;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const FAB: React.FC<FABProps> = ({
  icon,
  disabled = false,
  size = 56,
  className = "",
  type = "button",
  onClick,
}) => {
  const bgColor = "var(--surface-tint)";
  const iconColor = "var(--on-surface)";

  const isValidStyledIcon =
    React.isValidElement(icon) &&
    typeof icon === "object" &&
    "props" in icon &&
    icon.props &&
    typeof icon.props === "object";

  const iconWithStyle =
    isValidStyledIcon && React.isValidElement(icon)
      ? React.cloneElement(icon, {
          style: {
            ...icon.props.style,
            color: iconColor,
            width: size - 16,
            height: size - 16,
          },
        })
      : icon;

  return (
    <button
      type={type}
      className={[
        "inline-flex items-center justify-center",
        "select-none transition-colors duration-150",
        "border-none outline-none",
        "rounded-[var(--radius-full)]",
        disabled ? "cursor-not-allowed" : "",
        className,
      ].join(" ")}
      style={{
        width: size,
        height: size,
        padding: 0,
        borderRadius: "var(--radius-full)",
        background: bgColor,
        color: iconColor,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.1 : 1,
        transition: "opacity 0.15s",
      }}
      disabled={disabled}
      onClick={onClick}
      aria-label="fab button"
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: size - 16,
          height: size - 16,
        }}
      >
        {iconWithStyle}
      </span>
    </button>
  );
};

export default FAB;
