import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  variant?: "filled" | "text" | "icon";
  size?: "medium" | "small";
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};


const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = "",
  type = "button",
  onClick,
}) => {
  return (
    <span
      className={[
        "inline-block",
        fullWidth ? "w-full" : "",
        "h-[var(--space-40)]",
        "rounded-[var(--radius-full)]",
        "relative"
      ].join(" ")}
      style={{ position: "relative" }}
    >
      {/* 背景レイヤー（常にsurface、disabled時のみopacity10%） */}
      <span
        className={[
          "absolute left-0 top-0 w-full h-full rounded-[var(--radius-full)]",
          "bg-[var(--surface)]",
          disabled ? "opacity-10" : "opacity-0"
        ].join(" ")}
        aria-hidden="true"
      />
      {/* ボタン本体 */}
      <button
        type={type}
        className={[
          "relative z-10",
          "inline-flex items-center justify-center",
          "h-full w-full min-w-[40px]",
          "rounded-[var(--radius-full)]",
          "bg-[var(--inverse-surface)]",
          "px-[var(--space-16)]",
          fullWidth ? "w-full" : "",
          disabled ? "cursor-not-allowed" : "hover:bg-[var(--inverse-surface)]",
          "select-none transition-colors duration-150",
          "border border-transparent",
          "focus:outline-none focus:ring-2 focus:ring-[var(--primary)]",
          className
        ].join(" ")}
        disabled={disabled}
        onClick={onClick}
        style={{}}
      >
        <span className="flex items-center w-full justify-center px-[var(--space-8)]">
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          <span
            className={[
              "font-[var(--font-weight-medium-bold)]",
              "font-[var(--font-family-base)]",
              "text-[var(--font-size-medium)]",
              "leading-[var(--line-height-medium)]",
              "text-[var(--inverse-on-surface)]",
              "whitespace-nowrap"
            ].join(" ")}
          >
            {children}
          </span>
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </span>
      </button>
    </span>
  );
};

export default Button;