import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "Components/Checkbox",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
  },
  args: { label: "チェックボックス" },
};

export const Disabled: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return <Checkbox {...args} checked={checked} onChange={setChecked} disabled />;
  },
  args: { label: "無効状態" },
};