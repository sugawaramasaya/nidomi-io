import type { Meta, StoryObj } from "@storybook/react";
import TagList from "../app/(me)/mypage/post/TagList";

const meta: Meta<typeof TagList> = {
  component: TagList,
  title: "Components/TagList",
  tags: ["autodocs"],
};

const metaExport = meta;
export default metaExport;

type Story = StoryObj<typeof TagList>;

export const Default: Story = {
  args: {
    tags: ["タグ1", "タグ2", "タグ3"],
  },
};
