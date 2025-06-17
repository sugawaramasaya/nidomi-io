import React from "react";
import HeartFilledIcon from "../icons/size40/heart-filled.svg";
import HeartOutlinedIcon from "../icons/size40/heart-outlined.svg";
import BaseCountIconButton from "./BaseCountIconButton";

type CountIconButtonProps = {
  checked: boolean;
  count: number;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const CountIconButton: React.FC<CountIconButtonProps> = ({
  checked,
  count,
  disabled = false,
  className = "",
  type = "button",
  onClick,
}) => {
  return (
    <BaseCountIconButton
      checked={checked}
      count={count}
      disabled={disabled}
      className={className}
      type={type}
      onClick={onClick}
      renderIcon={(checked, size, color) =>
        checked ? (
          <HeartFilledIcon
            style={{
              color,
              width: size,
              height: size,
              background: "transparent",
            }}
          />
        ) : (
          <HeartOutlinedIcon
            style={{
              color,
              width: size,
              height: size,
              background: "transparent",
            }}
          />
        )
      }
    />
  );
};

export default CountIconButton;
