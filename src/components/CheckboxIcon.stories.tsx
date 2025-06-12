import React, { useState } from "react";
import CheckboxIcon from "./CheckboxIcon";

export default {
  component: CheckboxIcon,
  title: "Components/CheckboxIcon",
  tags: ["autodocs"],
};

export const Default = () => {
  const [checked, setChecked] = useState(false);
  return <CheckboxIcon checked={checked} onChange={setChecked} />;
};

export const Checked = () => {
  const [checked, setChecked] = useState(true);
  return <CheckboxIcon checked={checked} onChange={setChecked} />;
};

export const Disabled = () => {
  const [checked, setChecked] = useState(false);
  return <CheckboxIcon checked={checked} onChange={setChecked} disabled />;
};
