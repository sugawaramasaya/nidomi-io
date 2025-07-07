import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "./IconButton";
import MenuIcon from "@/icons/size40/menu.svg";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: "Components/IconButton",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    icon: <MenuIcon />,
  },
};
