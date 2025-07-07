import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "Components/Checkbox",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

const CheckboxWithState = (args: any) => {
  const [checked, setChecked] = useState(false);
  return <Checkbox {...args} checked={checked} onChange={setChecked} />;
};

const CheckboxWithStateChecked = (args: any) => {
  const [checked, setChecked] = useState(true);
  return <Checkbox {...args} checked={checked} onChange={setChecked} />;
};

const CheckboxWithStateDisabled = (args: any) => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox {...args} checked={checked} onChange={setChecked} disabled />
  );
};

export const Default: Story = {
  render: (args) => <CheckboxWithState {...args} />,
};

export const Checked: Story = {
  render: (args) => <CheckboxWithStateChecked {...args} />,
};

export const Disabled: Story = {
  render: (args) => <CheckboxWithStateDisabled {...args} />,
};
