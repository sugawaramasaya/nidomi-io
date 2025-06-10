import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  variant?: "filled" | "outlined" | "tonal" | "text" | "icon";
  size?: "medium" | "small";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-[12px] transition-colors duration-150 select-none focus:outline-none focus:ring-2 focus:ring-[var(--primary)]";

const variants = {
  filled:
    "bg-[var(--primary)] text-[var(--on-primary)] hover:bg-[var(--primary-container)] active:bg-[var(--primary)] border border-transparent",
  outlined:
    "bg-transparent text-[var(--primary)] border border-[var(--primary)] hover:bg-[var(--primary-container)] active:bg-[var(--primary)]",
  tonal:
    "bg-[var(--secondary-container)] text-[var(--on-secondary-container)] border border-transparent hover:bg-[var(--secondary)] active:bg-[var(--secondary-container)]",
  text:
    "bg-transparent text-[var(--primary)] border border-transparent hover:bg-[var(--primary-container)] active:bg-[var(--primary)]",
  icon:
    "bg-transparent text-[var(--primary)] border border-transparent p-0 w-10 h-10 justify-center",
};

const sizes = {
  medium: "h-12 px-6 text-[16px]",
  small: "h-8 px-3 text-[14px]",
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "filled",
  size = "medium",
  disabled = false,
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = "",
  type = "button",
  onClick,
}) => (
  <button
    type={type}
    className={[
      base,
      variants[variant],
      sizes[size],
      fullWidth ? "w-full" : "",
      disabled || loading ? "opacity-50 cursor-not-allowed" : "",
      className,
    ].join(" ")}
    disabled={disabled || loading}
    onClick={onClick}
  >
    {leftIcon && <span className="mr-2">{leftIcon}</span>}
    {loading ? (
      <span className="animate-spin w-5 h-5 border-2 border-t-transparent border-[var(--on-primary)] rounded-full" />
    ) : (
      children
    )}
    {rightIcon && <span className="ml-2">{rightIcon}</span>}
  </button>
);

export default Button;