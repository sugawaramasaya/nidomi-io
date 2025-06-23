import React from "react";
import CloseIcon from "../icons/size20/close.svg";

interface TagDeleteButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

/**
 * タグ削除ボタン: 20px closeアイコン＋ラベル、背景なし、ラベル左右8px・全体8pxパディング、ラベルLarge、色onSurface
 */
const TagDeleteButton: React.FC<TagDeleteButtonProps> = ({
  label,
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center rounded-[var(--radius-full)] border-none outline-none bg-transparent select-none transition-opacity duration-150 ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      } ${className}`}
      style={{
        padding: "var(--space-8)",
        color: "var(--on-surface)",
      }}
      onClick={onClick}
      disabled={disabled}
      aria-label={`${label}を削除`}
    >
      <span style={{ display: "flex", alignItems: "center" }}>
        <CloseIcon
          width={20}
          height={20}
          style={{ color: "var(--on-surface)" }}
        />
      </span>
    </button>
  );
};

export default TagDeleteButton;
