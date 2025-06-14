import type { Meta, StoryObj } from "@storybook/react";
import SignupTopPage from "@/app/(auth)/register/SignupTopPage";

const meta = {
  title: "Auth/SignupTopPage",
  component: SignupTopPage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SignupTopPage>;

export default meta;
type Story = StoryObj<typeof SignupTopPage>;

export const Default: Story = {};
