import type { Meta, StoryObj } from "@storybook/react";
import CountIconButton from "./CountIconButton";

const meta: Meta<typeof CountIconButton> = {
  component: CountIconButton,
  title: "Components/CountIconButton",
  tags: ["autodocs"],
};

const metaExport = meta;
export default metaExport;

type Story = StoryObj<typeof CountIconButton>;

export const Default: Story = {
  args: {
    count: 42,
  },
};
