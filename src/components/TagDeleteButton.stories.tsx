import type { Meta, StoryObj } from "@storybook/react";
import TagDeleteButton from "./TagDeleteButton";

const meta: Meta<typeof TagDeleteButton> = {
  component: TagDeleteButton,
  title: "Components/TagDeleteButton",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TagDeleteButton>;

export const Default: Story = {
  args: {
    label: "タグ名",
  },
};

export const Disabled: Story = {
  args: {
    label: "タグ名",
    disabled: true,
  },
};
