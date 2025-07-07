import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FollowButton, { FollowButtonProps } from "./FollowButton";

const meta: Meta<typeof FollowButton> = {
  component: FollowButton,
  title: "Components/FollowButton",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FollowButton>;

const FollowButtonWithState = (args: FollowButtonProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <FollowButton
      {...args}
      checked={checked}
      onClick={() => setChecked((v: boolean) => !v)}
    />
  );
};

const FollowButtonWithStateLarge = (args: FollowButtonProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <FollowButton
      {...args}
      checked={checked}
      onClick={() => setChecked((v: boolean) => !v)}
      size="large"
    />
  );
};

const FollowButtonWithStateMedium = (args: FollowButtonProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <FollowButton
      {...args}
      checked={checked}
      onClick={() => setChecked((v: boolean) => !v)}
      size="medium"
    />
  );
};

export const Default: Story = {
  render: (args) => <FollowButtonWithState {...args} />,
};

export const ToggleLarge: Story = {
  render: (args) => <FollowButtonWithStateLarge {...args} />,
};

export const ToggleMedium: Story = {
  render: (args) => <FollowButtonWithStateMedium {...args} />,
};
