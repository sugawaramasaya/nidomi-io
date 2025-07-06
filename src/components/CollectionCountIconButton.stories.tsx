import type { Meta, StoryObj } from "@storybook/react";
import CollectionCountIconButton from "./CollectionCountIconButton";

const meta: Meta<typeof CollectionCountIconButton> = {
  component: CollectionCountIconButton,
  title: "Components/CollectionCountIconButton",
  tags: ["autodocs"],
};

const metaExport = meta;
export default metaExport;

type Story = StoryObj<typeof CollectionCountIconButton>;

export const Default: Story = {
  args: {
    count: 42,
  },
};
