import type { Meta, StoryObj } from "@storybook/nextjs";
import Divider from "./Divider";

const meta: Meta<typeof Divider> = {
  component: Divider,
  title: "Components/Divider",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = { args: {} };
export const CustomWidth: Story = { args: { width: 320 } };
export const CustomColor: Story = { args: { color: "var(--primary)" } };
