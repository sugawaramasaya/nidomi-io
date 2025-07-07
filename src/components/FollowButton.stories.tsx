import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FollowButton from "./FollowButton";

const meta: Meta<typeof FollowButton> = {
  component: FollowButton,
  title: "Components/FollowButton",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FollowButton>;

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <FollowButton
        {...args}
        checked={checked}
        onClick={() => setChecked((v: boolean) => !v)}
      />
    );
  },
};

export const ToggleLarge: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <FollowButton
        {...args}
        checked={checked}
        onClick={() => setChecked((v: boolean) => !v)}
        size="large"
      />
    );
  },
};

export const ToggleMedium: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <FollowButton
        {...args}
        checked={checked}
        onClick={() => setChecked((v: boolean) => !v)}
        size="medium"
      />
    );
  },
};
