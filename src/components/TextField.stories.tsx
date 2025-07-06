import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TextField from "./TextField";

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: "Components/TextField",
  tags: ["autodocs"],
};

const metaExport = meta;
export default metaExport;

type Story = StoryObj<typeof TextField>;

const TextFieldWithState = ({
  label,
  ...args
}: {
  label: string;
  [key: string]: unknown;
}) => {
  const [value, setValue] = useState("");
  return (
    <TextField {...args} label={label} value={value} onChange={setValue} />
  );
};

export const Default: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: "ラベル",
    placeholder: "プレースホルダー",
  },
};

export const WithHelper: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: "ユーザー名",
    helperText: "32文字以内",
    maxLength: 32,
  },
};

export const WithCounterOnly: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: "ニックネーム",
    maxLength: 16,
  },
};

export const Error: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: "パスワード",
    error: true,
    errorMessage: "8文字以上で入力してください",
    maxLength: 16,
  },
};

export const ErrorMessageOnly: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: "パスワード",
    error: true,
    errorMessage: "8文字以上で入力してください",
  },
};

export const Disabled: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: "メールアドレス",
    disabled: true,
    helperText: "入力できません",
  },
};

export const ErrorWithCounterOnly: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: "パスワード",
    variant: "password",
    error: true,
    errorMessage: undefined,
    maxLength: 16,
  },
};

export const ErrorWithCounterOnlyMaxLength40: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: "パスワード",
    variant: "password",
    error: true,
    errorMessage: undefined,
    maxLength: 40,
  },
};
