import React from "react";
import ToggleLabelButton from "./ToggleLabelButton";

export type FollowButtonProps = {
  checked: boolean;
  size?: "large" | "medium";
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const FollowButton: React.FC<FollowButtonProps> = (props) => {
  const size = props.size || "large";
  const fontSize =
    size === "large" ? "var(--font-size-large)" : "var(--font-size-medium)";
  const lineHeight =
    size === "large" ? "var(--line-height-large)" : "var(--line-height-medium)";
  return (
    <ToggleLabelButton
      checked={props.checked}
      labelChecked="フォロー中"
      labelUnchecked="フォロー"
      colorChecked="var(--on-surface-variant)"
      colorUnchecked="var(--on-surface)"
      disabled={props.disabled}
      className={props.className}
      type={props.type}
      onClick={props.onClick}
      height={56}
      padding="var(--space-8) var(--space-16)"
      fontSize={fontSize}
      lineHeight={lineHeight}
      fontWeight={700}
    />
  );
};

export default FollowButton;
