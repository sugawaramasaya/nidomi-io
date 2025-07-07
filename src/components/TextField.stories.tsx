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

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <TextField
        {...args}
        label="ラベル"
        value={value}
        onChange={setValue}
        placeholder="プレースホルダー"
      />
    );
  },
};

export const WithHelper: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <TextField
        {...args}
        label="ユーザー名"
        value={value}
        onChange={setValue}
        helperText="32文字以内"
        maxLength={32}
      />
    );
  },
};

export const WithCounterOnly: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <TextField
        {...args}
        label="ニックネーム"
        value={value}
        onChange={setValue}
        maxLength={16}
      />
    );
  },
};

export const Error: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <TextField
        {...args}
        label="パスワード"
        value={value}
        onChange={setValue}
        error
        errorMessage="8文字以上で入力してください"
        maxLength={16}
      />
    );
  },
};

export const ErrorMessageOnly: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <TextField
        {...args}
        label="パスワード"
        value={value}
        onChange={setValue}
        error
        errorMessage="8文字以上で入力してください"
      />
    );
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <TextField
        {...args}
        label="メールアドレス"
        value={value}
        onChange={setValue}
        disabled
        helperText="入力できません"
      />
    );
  },
};

export const ErrorWithCounterOnly: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <TextField
        {...args}
        label="パスワード"
        variant="password"
        value={value}
        onChange={setValue}
        error
        errorMessage={undefined}
        maxLength={16}
      />
    );
  },
};

export const ErrorWithCounterOnlyMaxLength40: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <TextField
        {...args}
        label="パスワード"
        variant="password"
        value={value}
        onChange={setValue}
        error
        errorMessage={undefined}
        maxLength={40}
      />
    );
  },
};
