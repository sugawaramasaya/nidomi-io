import React from "react";
import CircleIcon from "../icons/size40/circle.svg";
import CircleCheckFilledIcon from "../icons/size40/circle-check-filled.svg";

export type Checkbox = {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
};

const Checkbox: React.FC<Checkbox> = ({
  checked,
  onChange,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type="button"
      className={[
        "inline-flex items-center justify-center",
        "border-none outline-none bg-transparent",
        "select-none transition-opacity duration-150",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        className,
      ].join(" ")}
      style={{
        width: 56,
        height: 56,
        padding: 8,
        background: "transparent",
        opacity: disabled ? 0.1 : 1,
        transition: "opacity 0.15s",
      }}
      onClick={() => !disabled && onChange?.(!checked)}
      disabled={disabled}
      aria-checked={checked}
      role="checkbox"
      tabIndex={0}
    >
      {checked ? (
        <CircleCheckFilledIcon
          width={40}
          height={40}
          style={{
            color: "var(--surface)",
            mixBlendMode: "multiply",
            filter: "invert(100%)",
          }}
        />
      ) : (
        <CircleIcon
          width={40}
          height={40}
          style={{
            color: "var(--surface)",
            mixBlendMode: "multiply",
            filter: "invert(100%)",
          }}
        />
      )}
    </button>
  );
};

export default Checkbox;
