import React from "react";
import Button from "./Button";

export default {
  component: Button,
  title: "Components/Button",
  tags: ["autodocs"],
};


export const Filled = () => <Button>Filled</Button>;
export const Disabled = () => <Button disabled>Disabled</Button>;
export const FullWidth = () => <Button fullWidth>Full Width</Button>;
