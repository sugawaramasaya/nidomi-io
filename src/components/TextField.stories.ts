import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import TextField from "./TextField";

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: "Components/TextField",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof TextField>;

export const Filled: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return <TextField {...args} value={value} onChange={setValue} />;
  },
  args: { label: "Filled", placeholder: "入力してください", variant: "filled" },
};

export const Outlined: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return <TextField {...args} value={value} onChange={setValue} />;
  },
  args: { label: "Outlined", placeholder: "入力してください", variant: "outlined" },
};

export const Error: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <TextField
        {...args}
        value={value}
        onChange={setValue}
        error={value === ""}
        helperText="必須項目です"
      />
    );
  },
  args: { label: "エラー", placeholder: "入力してください", variant: "filled" },
};