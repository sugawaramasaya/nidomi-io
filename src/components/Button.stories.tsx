import React from "react";
import Button from "./Button";
import { FiPlus } from "react-icons/fi";

export default {
  component: Button,
  title: "Components/Button",
  tags: ["autodocs"],
};

export const Filled = () => <Button variant="filled">Filled</Button>;
export const Text = () => <Button variant="text">Text</Button>;
export const Icon = () => <Button variant="icon" leftIcon={<FiPlus />} aria-label="追加" />;
export const WithIcon = () => <Button variant="filled" leftIcon={<FiPlus />}>アイコン付き</Button>;
export const Disabled = () => <Button variant="filled" disabled>Disabled</Button>;
export const FullWidth = () => <Button variant="filled" fullWidth>Full Width</Button>;
