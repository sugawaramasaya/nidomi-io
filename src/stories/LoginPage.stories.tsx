import type { Meta, StoryObj } from "@storybook/react";
import LoginPage from "@/app/(auth)/login/page";

const meta = {
  title: "Pages/LoginPage",
  component: LoginPage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof LoginPage>;

export const Default: Story = {
  args: {
    isLogin: false,
  },
};

export const Login: Story = {
  args: {
    isLogin: true,
  },
};
