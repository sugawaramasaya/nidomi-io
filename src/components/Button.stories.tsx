import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { FiPlus } from "react-icons/fi";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Filled: Story = { args: { children: "Filled", variant: "filled" } };
export const Outlined: Story = { args: { children: "Outlined", variant: "outlined" } };
export const Tonal: Story = { args: { children: "Tonal", variant: "tonal" } };
export const Text: Story = { args: { children: "Text", variant: "text" } };
export const Icon: Story = { args: { variant: "icon", leftIcon: <FiPlus />, "aria-label": "追加" } };
export const WithIcon: Story = { args: { children: "アイコン付き", leftIcon: <FiPlus /> } };
export const Disabled: Story = { args: { children: "Disabled", disabled: true } };
export const Loading: Story = { args: { children: "Loading...", loading: true } };
export const FullWidth: Story = { args: { children: "Full Width", fullWidth: true } };