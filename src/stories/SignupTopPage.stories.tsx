import type { Meta, StoryObj } from "@storybook/react";
// ❌ これだと解決できない
// import SignupTopPage from "@/app/(auth)/register/page";

// ✅ 相対パスで書き換え
import SignupTopPage from "../app/(auth)/register/page";

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
