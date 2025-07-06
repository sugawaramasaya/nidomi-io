import type { Meta, StoryObj } from "@storybook/react";
import TagDialog from "../app/(me)/mypage/post/TagDialog";

const meta: Meta<typeof TagDialog> = {
  component: TagDialog,
  title: "Components/TagDialog",
  parameters: {
    layout: "fullscreen",
  },
};

const metaExport = meta;
export default metaExport;

type Story = StoryObj<typeof TagDialog>;

export const Default: Story = {
  args: {
    initialTags: ["タグ1", "タグ2", "タグ3"],
  },
};
