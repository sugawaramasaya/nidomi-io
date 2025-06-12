import React from "react";
import CircleIcon from "../icons/size40/circle.svg";
import CircleCheckFilledIcon from "../icons/size40/circle-check-filled.svg";

export type CheckboxIconProps = {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
};

/**
 * アイコンのみのチェックボックス（Figma仕様準拠）
 * - デフォルト未チェック
 * - タップでチェック/未チェック切り替え
 * - checked: true でチェック済みアイコン
 * - checked: false で未チェックアイコン
 * - アイコンサイズ: 40x40px
 * - タップ領域: 56x56px（アイコン周囲8pxスペース）
 * - アイコン色: surface
 * - 背景色なし
 * - アイコンにmix-blend-mode: multiply
 */
const CheckboxIcon: React.FC<CheckboxIconProps> = ({
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
          style={{ color: "var(--surface)", mixBlendMode: "multiply" }}
        />
      ) : (
        <CircleIcon
          width={40}
          height={40}
          style={{ color: "var(--surface)", mixBlendMode: "multiply" }}
        />
      )}
    </button>
  );
};

export default CheckboxIcon;
