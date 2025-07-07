import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CountIconButton from "./CountIconButton";

const meta: Meta<typeof CountIconButton> = {
  component: CountIconButton,
  title: "Components/CountIconButton",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof CountIconButton>;

const CountIconButtonWithState = (args: any) => {
  const [checked, setChecked] = useState(false);
  const count = checked ? 1 : 0;
  return (
    <CountIconButton
      {...args}
      checked={checked}
      count={count}
      onClick={() => setChecked((v) => !v)}
    />
  );
};

export const Default: Story = {
  args: {
    count: 42,
  },
};

export const Toggle: Story = {
  render: (args) => <CountIconButtonWithState {...args} />,
};
