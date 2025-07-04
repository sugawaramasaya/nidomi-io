import React from "react";
import TagDialog from "../app/(me)/mypage/post/TagDialog";

export default {
  title: "Pages/TagDialog",
  component: TagDialog,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => <TagDialog />;
