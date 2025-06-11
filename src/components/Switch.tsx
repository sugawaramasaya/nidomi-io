import React from "react";

type SwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
  id?: string;
};

const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  disabled = false,
  label,
  className = "",
  id,
}) => {
  const switchId = id || `switch-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <label
      htmlFor={switchId}
      className={`inline-flex items-center gap-2 cursor-pointer select-none ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      <span className="relative inline-block w-10 h-6" style={{ width: 40, height: 24 }}>
        <input
          id={switchId}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={e => onChange(e.target.checked)}
          className="peer opacity-0 absolute left-0 top-0 m-0 cursor-pointer"
          style={{ width: 40, height: 24 }}
        />
        {/* トラック */}
        <span
          className={`
            absolute left-0 top-0 rounded-full transition-colors duration-150
            ${checked ? "bg-[#0057FF]" : "bg-[#E0E0E0]"}
          `}
          style={{ width: 40, height: 24, borderRadius: 999 }}
        />
        {/* サム */}
        <span
          className={`
            absolute top-1 left-1 transition-transform duration-150
            ${checked ? "translate-x-4" : ""}
          `}
          style={{
            width: 16,
            height: 16,
            borderRadius: 999,
            background: "#fff",
            boxShadow: "0 1px 4px 0 rgba(0,0,0,0.08)",
          }}
        />
      </span>
      {label && (
        <span className="text-[var(--on-surface)] text-[16px] font-normal">
          {label}
        </span>
      )}
    </label>
  );
};

export default Switch;