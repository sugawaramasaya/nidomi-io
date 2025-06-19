// src/components/MyPageComponent.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import MyPageComponent from "./MyPageComponent";
import { BookPost } from "@/types/bookPost";

const meta: Meta<typeof MyPageComponent> = {
  component: MyPageComponent,
  title: "Pages/MyPageComponent",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MyPageComponent>;

export const WithPosts: Story = {
  args: {
    posts: [
      {
        id: "1",
        title: "ZINE 1",
        comment: "すてきな作品です",
        imageUrls: ["/sample1.png"],
        tags: ["写真", "ZINE"],
        createdAt: new Date(),
        userId: "user123",
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    posts: [],
  },
};
