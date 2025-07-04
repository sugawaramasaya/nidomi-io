import React from "react";
import PostForm from "../app/(me)/mypage/post/PostForm";

export default {
  title: "Pages/PostForm",
  component: PostForm,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => <PostForm />;
