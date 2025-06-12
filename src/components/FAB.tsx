import React from "react";

type FABProps = {
  icon: React.ReactNode;
  disabled?: boolean;
  size?: number; // px, default 56
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
        {React.isValidElement(icon)
          ? React.cloneElement(
              icon as React.ReactElement<{ style?: React.CSSProperties }>,
              {
                style: {
                  ...(typeof icon.props === "object" &&
                  icon.props &&
                  "style" in icon.props &&
                  icon.props.style
                    ? icon.props.style
                    : {}),
                  color: iconColor,
                  width: size - 16,
                  height: size - 16,
                },
              }
            )
          : icon}
      </span>
    </button>
  );
};

export default FAB;
