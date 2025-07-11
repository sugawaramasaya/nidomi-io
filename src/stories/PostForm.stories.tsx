import type { Meta, StoryObj } from "@storybook/react";
import PostForm from "../app/(me)/mypage/post/page";

const meta: Meta<typeof PostForm> = {
  component: PostForm,
  title: "Pages/PostForm",
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof PostForm>;

export const Default: Story = {};
