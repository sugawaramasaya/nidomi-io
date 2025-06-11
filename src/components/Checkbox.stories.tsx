import React, { useState } from "react";
import Checkbox from "./Checkbox";

export default {
  component: Checkbox,
  title: "Components/Checkbox",
  tags: ["autodocs"],
};

export const Default = () => {
  const [checked, setChecked] = useState(false);
  return <Checkbox checked={checked} onChange={setChecked} />;
};

export const Checked = () => {
  const [checked, setChecked] = useState(true);
  return <Checkbox checked={checked} onChange={setChecked} />;
};

export const Disabled = () => {
  const [checked, setChecked] = useState(false);
  return <Checkbox checked={checked} onChange={setChecked} disabled />;
};
