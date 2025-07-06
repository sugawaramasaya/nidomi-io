import type { Meta, StoryObj } from "@storybook/react";
import Switch from "./Switch";
import React from "react";

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: "Components/Switch",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Switch>;

const SwitchWithState = ({ ...args }) => {
  const [checked, setChecked] = React.useState(false);
  return <Switch {...args} checked={checked} onChange={setChecked} />;
};

const SwitchWithStateDisabled = ({ ...args }) => {
  const [checked, setChecked] = React.useState(false);
  return <Switch {...args} checked={checked} onChange={setChecked} disabled />;
};

export const Default: Story = {
  render: (args) => <SwitchWithState {...args} />,
};

export const Disabled: Story = {
  render: (args) => <SwitchWithStateDisabled {...args} />,
};
