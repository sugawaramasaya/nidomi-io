import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TextField from "./TextField";

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: "Components/TextField",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TextField>;

const TextFieldWithState = (args: any) => {
  const [value, setValue] = useState("");
  return <TextField {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
  render: (args) => (
    <TextFieldWithState
      {...args}
      label="ラベル"
      placeholder="プレースホルダー"
    />
  ),
};

export const WithHelper: Story = {
  render: (args) => (
    <TextFieldWithState
      {...args}
      label="ユーザー名"
      helperText="32文字以内"
      maxLength={32}
    />
  ),
};

export const WithCounterOnly: Story = {
  render: (args) => (
    <TextFieldWithState {...args} label="ニックネーム" maxLength={16} />
  ),
};

export const Error: Story = {
  render: (args) => (
    <TextFieldWithState
      {...args}
      label="パスワード"
      error
      errorMessage="8文字以上で入力してください"
      maxLength={16}
    />
  ),
};

export const ErrorMessageOnly: Story = {
  render: (args) => (
    <TextFieldWithState
      {...args}
      label="パスワード"
      error
      errorMessage="8文字以上で入力してください"
    />
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <TextFieldWithState
      {...args}
      label="メールアドレス"
      disabled
      helperText="入力できません"
    />
  ),
};

export const ErrorWithCounterOnly: Story = {
  render: (args) => (
    <TextFieldWithState
      {...args}
      label="パスワード"
      variant="password"
      error
      errorMessage={undefined}
      maxLength={16}
    />
  ),
};

export const ErrorWithCounterOnlyMaxLength40: Story = {
  render: (args) => (
    <TextFieldWithState
      {...args}
      label="パスワード"
      variant="password"
      error
      errorMessage={undefined}
      maxLength={40}
    />
  ),
};
