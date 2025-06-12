import React, { useState } from "react";
import TextField from "./TextField";

export default {
  component: TextField,
  title: "Components/TextField",
  tags: ["autodocs"],
};

export const Default = () => {
  const [value, setValue] = useState("");
  return (
    <TextField label="メールアドレス" value={value} onChange={setValue} placeholder="example@email.com" />
  );
};

export const WithHelper = () => {
  const [value, setValue] = useState("");
  return (
    <TextField label="ユーザー名" value={value} onChange={setValue} helperText="32文字以内" maxLength={32} />
  );
};

export const WithCounterOnly = () => {
  const [value, setValue] = useState("");
  return (
    <TextField label="ニックネーム" value={value} onChange={setValue} maxLength={16} />
  );
};

export const Error = () => {
  const [value, setValue] = useState("");
  return (
    <TextField label="パスワード" value={value} onChange={setValue} error errorMessage="8文字以上で入力してください" maxLength={16} />
  );
};

export const ErrorMessageOnly = () => {
  const [value, setValue] = useState("");
  return (
    <TextField label="パスワード" value={value} onChange={setValue} error errorMessage="8文字以上で入力してください" />
  );
};

export const Disabled = () => {
  const [value, setValue] = useState("");
  return (
    <TextField label="メールアドレス" value={value} onChange={setValue} disabled helperText="入力できません" />
  );
};

export const ErrorWithCounterOnly = () => {
  const [value, setValue] = useState("");
  return (
    <TextField
      label="パスワード"
      variant="password"
      value={value}
      onChange={setValue}
      error
      errorMessage={undefined}
      maxLength={16}
    />
  );
};

export const ErrorWithCounterOnlyMaxLength40 = () => {
  const [value, setValue] = useState("");
  return (
    <TextField
      label="パスワード"
      variant="password"
      value={value}
      onChange={setValue}
      error
      errorMessage={undefined}
      maxLength={40}
    />
  );
};
