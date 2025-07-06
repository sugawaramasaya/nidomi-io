import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FollowButton from "./FollowButton";

const meta: Meta<typeof FollowButton> = {
  component: FollowButton,
  title: "Components/FollowButton",
  tags: ["autodocs"],
};

const metaExport = meta;
export default metaExport;

type Story = StoryObj<typeof FollowButton>;

const FollowButtonWithState = ({ ...args }) => {
  const [checked, setChecked] = useState(false);
  return (
    <FollowButton
      {...args}
      checked={checked}
      onClick={() => setChecked((v: boolean) => !v)}
    />
  );
};

export const Default: Story = {
  render: (args) => <FollowButtonWithState {...args} />,
};

export const ToggleLarge: Story = {
  render: (args) => <FollowButtonWithState {...args} size="large" />,
};

export const ToggleMedium: Story = {
  render: (args) => <FollowButtonWithState {...args} size="medium" />,
};
