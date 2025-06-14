import type { Meta, StoryObj } from "@storybook/react";
import AuthForm from "./AuthForm";

const meta: Meta<typeof AuthForm> = {
  title: "Auth/AuthForm",
  component: AuthForm,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof AuthForm>;

export const Register: Story = {
  args: {
    isLogin: false,
  },
};

export const Login: Story = {
  args: {
    isLogin: true,
  },
};
