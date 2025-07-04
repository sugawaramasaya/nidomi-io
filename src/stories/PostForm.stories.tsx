import React from "react";
import PostForm from "../app/(me)/mypage/post/form/page";

export default {
  title: "Pages/PostForm",
  component: PostForm,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => <PostForm />;
