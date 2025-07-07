import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CollectionCountIconButton from "./CollectionCountIconButton";

const meta: Meta<typeof CollectionCountIconButton> = {
  component: CollectionCountIconButton,
  title: "Components/CollectionCountIconButton",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof CollectionCountIconButton>;

type CollectionCountIconButtonProps = {
  checked: boolean;
  count: number;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const CollectionCountIconButtonWithState = (args: CollectionCountIconButtonProps) => {
  const [checked, setChecked] = useState(false);
  const count = checked ? 1 : 0;
  return (
    <CollectionCountIconButton
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
  render: (args) => <CollectionCountIconButtonWithState {...args} />,
};
