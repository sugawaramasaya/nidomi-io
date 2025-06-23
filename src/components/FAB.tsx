import React, { ReactElement } from "react";

const FAB = ({
  icon,
  disabled = false,
  size = 56,
  className = "",
  type = "button",
  onClick,
}: {
  icon: React.ReactNode;
  disabled?: boolean;
  size?: number;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
      ? React.cloneElement(
          icon as React.ReactElement<{ style?: React.CSSProperties }>,
          {
            style: {
              ...((icon.props as { style?: React.CSSProperties })?.style || {}),
              color: iconColor,
              width: size - 16,
              height: size - 16,
            },
          }
        )
      : icon;

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center select-none transition-colors duration-150 border-none outline-none rounded-[var(--radius-full)] ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
      style={{
        width: size,
        height: size,
        padding: "var(--space-8)",
        backgroundColor: bgColor,
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {iconWithStyle}
    </button>
  );
};

export default FAB;
