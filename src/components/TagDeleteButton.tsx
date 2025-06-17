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
      className={[
        "inline-flex items-center",
        "rounded-[var(--radius-full)]",
        "border-none outline-none bg-transparent",
        "select-none transition-opacity duration-150",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        className,
      ].join(" ")}
      style={{
        padding: "var(--space-8)",
        background: "transparent",
        color: "var(--on-surface)",
        borderRadius: "var(--radius-full)",
        opacity: disabled ? 0.1 : 1,
        transition: "opacity 0.15s",
      }}
      onClick={onClick}
      disabled={disabled}
      aria-label={label + "を削除"}
    >
      <span style={{ display: "flex", alignItems: "center" }}>
        <CloseIcon
          width={20}
          height={20}
          style={{ color: "var(--on-surface)" }}
        />
      </span>
      <span
        style={{
          fontFamily: "var(--font-family-base)",
          fontWeight: "var(--font-weight-bold)",
          fontSize: "var(--font-size-large)",
          lineHeight: "var(--line-height-large)",
          paddingLeft: "var(--space-8)",
          paddingRight: "var(--space-8)",
          userSelect: "none",
        }}
      >
        {label}
      </span>
    </button>
  );
};

export default TagDeleteButton;
