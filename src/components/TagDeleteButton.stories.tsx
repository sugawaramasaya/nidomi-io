import React from "react";
import TagDeleteButton from "./TagDeleteButton";

export default {
  component: TagDeleteButton,
  title: "Components/TagDeleteButton",
  tags: ["autodocs"],
};

export const Default = () => (
  <TagDeleteButton label="タグ名" onClick={() => {}} />
);

export const Disabled = () => (
  <TagDeleteButton label="タグ名" disabled onClick={() => {}} />
);
