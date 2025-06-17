import React, { useState } from "react";
import CountIconButton from "./CountIconButton";

export default {
  component: CountIconButton,
  title: "Components/CountIconButton",
  tags: ["autodocs"],
};

export const Toggle = () => {
  const [checked, setChecked] = useState(false);
  const count = checked ? 1 : 0;
  return (
    <CountIconButton
      checked={checked}
      count={count}
      onClick={() => setChecked((v) => !v)}
    />
  );
};
