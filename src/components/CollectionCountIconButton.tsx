import React from "react";
import AddCollectionFilledIcon from '../icons/size40/add-collection-filled.svg';
import AddCollectionOutlinedIcon from '../icons/size40/add-collection-outlined.svg';
import BaseCountIconButton from "./BaseCountIconButton";

type CollectionCountIconButtonProps = {
  checked: boolean;
  count: number;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const CollectionCountIconButton: React.FC<CollectionCountIconButtonProps> = ({
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
          <AddCollectionFilledIcon style={{ color, width: size, height: size }} />
        ) : (
          <AddCollectionOutlinedIcon style={{ color, width: size, height: size }} />
        )
      }
    />
  );
};

export default CollectionCountIconButton;
