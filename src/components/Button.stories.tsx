import React from "react";
import Button from "./Button";

export default {
  component: Button,
  title: "Components/Button",
  tags: ["autodocs"],
};

export const FilledPrimary = () => <Button variant="primary">Filled Primary</Button>;
export const DisabledFilledPrimary = () => <Button variant="primary" disabled>Disabled Filled Primary</Button>;
export const FullWidthFilledPrimary = () => <Button variant="primary" fullWidth>Full Width Filled Primary</Button>;
export const FilledSecondary = () => <Button variant="secondary">Filled Secondary</Button>;
export const DisabledFilledSecondary = () => <Button variant="secondary" disabled>Disabled Filled Secondary</Button>;
export const FullWidthFilledSecondary = () => <Button variant="secondary" fullWidth>Full Width Filled Secondary</Button>;
