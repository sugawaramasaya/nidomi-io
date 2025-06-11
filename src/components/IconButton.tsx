import React from "react";

type IconButtonProps = {
  icon: React.ReactNode;
  variant?: "filled" | "inverse";
  disabled?: boolean;
  size?: number; // px, default 40
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
  // Figmaトークンに基づく色分岐
  const bgColor = variant === "inverse" ? "var(--inverse-surface)" : "var(--surface)";
  // Filled: アイコン色はon-surface, Inverse: inverse-on-surface
  const iconColor = variant === "inverse" ? "var(--inverse-on-surface)" : "var(--on-surface)";

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
        width: "unset",
        height: "unset",
        padding: "var(--space-8)",
        borderRadius: "var(--radius-full)",
        background: bgColor,
        color: iconColor,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.1 : 1,
        transition: "opacity 0.15s"
      }}
      disabled={disabled}
      onClick={onClick}
      aria-label="icon button"
    >
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: size, height: size }}>
        {React.isValidElement(icon)
          ? React.cloneElement(icon, { style: { color: iconColor, width: 40, height: 40, ...icon.props.style } })
          : icon}
      </span>
    </button>
  );
};

export default IconButton;
