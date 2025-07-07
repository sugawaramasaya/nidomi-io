import type { Meta, StoryObj } from "@storybook/react";
import VerifyEmailPage from "./VerifyEmailPage";

const meta: Meta<typeof VerifyEmailPage> = {
  title: "Auth/VerifyEmailPage",
  component: VerifyEmailPage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof VerifyEmailPage>;

export const Default: Story = {
  args: {
    email: "user@example.com",
    isVerified: false,
    isLoading: false,
    error: "",
    success: "",
  },
};

export const Loading: Story = {
  args: {
    email: "user@example.com",
    isVerified: false,
    isLoading: true,
    error: "",
    success: "",
  },
};

export const WithError: Story = {
  args: {
    email: "user@example.com",
    isVerified: false,
    isLoading: false,
    error: "メールの再送信に失敗しました。しばらく後でお試しください。",
    success: "",
  },
};

export const WithSuccess: Story = {
  args: {
    email: "user@example.com",
    isVerified: false,
    isLoading: false,
    error: "",
    success: "認証メールを再送信しました。",
  },
};

export const Verified: Story = {
  args: {
    email: "user@example.com",
    isVerified: true,
    isLoading: false,
    error: "",
    success: "",
  },
};

export const CustomEmail: Story = {
  args: {
    email: "test.user@nidomi.io",
    isVerified: false,
    isLoading: false,
    error: "",
    success: "",
  },
};
