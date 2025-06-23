import React from "react";

type IconButtonProps = {
  icon: React.ReactElement<any, any>;
  variant?: "filled" | "inverse" | "fab";
  disabled?: boolean;
  size?: number;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = "filled",
  disabled = false,
  size = 40,
  className = "",
  type = "button",
  onClick,
}) => {
  const bgColor =
    variant === "inverse"
      ? "var(--inverse-surface)"
      : variant === "fab"
      ? "var(--surface-tint)"
      : "var(--surface)";

  const iconColor =
    variant === "inverse"
      ? "var(--inverse-on-surface)"
      : variant === "fab"
      ? "var(--on-surface)"
      : "var(--on-surface)";

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center select-none transition-colors duration-150 border-none outline-none rounded-[var(--radius-full)] ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: bgColor,
        color: iconColor,
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {React.cloneElement(icon, {
        style: {
          color: iconColor,
          width: size - 16,
          height: size - 16,
        },
      })}
    </button>
  );
};

export default IconButton;
