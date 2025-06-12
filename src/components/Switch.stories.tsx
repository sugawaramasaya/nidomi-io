import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import Switch from "./Switch";

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: "Components/Switch",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return <Switch {...args} checked={checked} onChange={setChecked} />;
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <Switch {...args} checked={checked} onChange={setChecked} disabled />
    );
  },
};
