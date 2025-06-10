import React from "react";

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  className = "",
  id,
}) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <label
      htmlFor={checkboxId}
      className={`inline-flex items-center gap-2 cursor-pointer select-none ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      <input
        id={checkboxId}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={e => onChange(e.target.checked)}
        className="peer appearance-none w-5 h-5 rounded-[4px] border border-solid border-[var(--outline-variant)] bg-[var(--surface)] checked:bg-[var(--primary)] checked:border-[var(--primary)] transition-colors duration-150 outline-none focus:ring-2 focus:ring-[var(--primary)]"
        style={{
          minWidth: 20,
          minHeight: 20,
        }}
      />
      {/* チェックマーク */}
      <span
        className="pointer-events-none absolute w-5 h-5 flex items-center justify-center"
        style={{ marginLeft: -24 }}
        aria-hidden="true"
      >
        {checked && (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 8.5L7 11.5L12 5.5"
              stroke="var(--on-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      {label && (
        <span
          className="text-[var(--on-surface)] text-[16px] font-normal"
          style={{ marginLeft: 8 }}
        >
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;