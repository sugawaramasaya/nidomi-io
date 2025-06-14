import type { Meta, StoryObj } from "@storybook/react";
import VerifyCodePage from "@/app/(auth)/verify-code/page";

const meta = {
  title: "Pages/VerifyCodePage",
  component: VerifyCodePage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof VerifyCodePage>;

export default meta;
type Story = StoryObj<typeof VerifyCodePage>;

export const Default: Story = {};
