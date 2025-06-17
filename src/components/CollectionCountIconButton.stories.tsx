import React, { useState } from "react";
import CollectionCountIconButton from "./CollectionCountIconButton";

export default {
  component: CollectionCountIconButton,
  title: "Components/CollectionCountIconButton",
  tags: ["autodocs"],
};

export const Toggle = () => {
  const [checked, setChecked] = useState(false);
  const count = checked ? 1 : 0;
  return (
    <CollectionCountIconButton
      checked={checked}
      count={count}
      onClick={() => setChecked((v) => !v)}
    />
  );
};
