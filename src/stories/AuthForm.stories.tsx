// src/components/AuthForm.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import AuthForm from "@/components/AuthForm";

const meta = {
  title: "Pages/AuthForm",
  component: AuthForm,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof AuthForm>;

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
