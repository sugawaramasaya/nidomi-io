import type { Meta, StoryObj } from "@storybook/react";
import FAB from "./FAB";
import AddIcon from "@/icons/size40/add.svg";

const meta: Meta<typeof FAB> = {
  component: FAB,
  title: "Components/FAB",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FAB>;

export const Default: Story = {
  args: {
    icon: <AddIcon />,
  },
};
