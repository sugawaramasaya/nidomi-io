import type { Meta, StoryObj } from "@storybook/react";
import ImageCropper from "../components/ImageCropper";

const meta: Meta<typeof ImageCropper> = {
  component: ImageCropper,
  title: "Components/ImageCropper",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ImageCropper>;

export const Default: Story = {
  args: {
    image: "https://placehold.co/400x400?text=Sample+Image",
  },
};
