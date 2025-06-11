import React from "react";

type SwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  id?: string;
};

const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  disabled = false,
  className = "",
  id,
}) => {
  const switchId = id || `switch-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <label
      htmlFor={switchId}
      className={`inline-flex items-center select-none ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`}
      style={{ width: 48, height: 48, minWidth: 48, minHeight: 48, justifyContent: "center" }}
    >
      <span
        className="relative flex items-center justify-center"
        style={{ width: 48, height: 48, minWidth: 48, minHeight: 48 }}
      >
        <input
          id={switchId}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={e => onChange(e.target.checked)}
          className="peer opacity-0 absolute left-0 top-0 m-0 cursor-pointer"
          style={{ width: 48, height: 48 }}
        />
        {/* 背景レイヤー */}
        <span
          className="absolute left-0 top-1/2 -translate-y-1/2 transition-colors duration-150"
          style={{
            width: 48,
            height: 32,
            background: "var(--surface-dim)",
            borderRadius: 999,
            zIndex: 1,
            pointerEvents: "none"
          }}
        />
        {/* サム（正円） */}
        <span
          className="absolute transition-transform duration-150"
          style={{
            left: checked ? 16 : 0,
            top: 8,
            width: 32,
            height: 32,
            borderRadius: 999,
            background: checked ? "var(--on-surface)" : "var(--on-surface-variant)",
            mixBlendMode: "normal",
            zIndex: 2,
            transition: "left 0.15s, background 0.15s"
          }}
        />
      </span>
    </label>
  );
};

export default Switch;