"use client";
import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AuthForm from "./AuthForm";

const meta: Meta<typeof AuthForm> = {
  title: "Auth/AuthForm",
  component: AuthForm,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof AuthForm>;

// 状態管理機能付きのAuthFormラッパー
const AuthFormWithState = (args: { isLogin?: boolean; buttonLabel?: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div>
      {/* 状態変更用のコントロール */}
      <div style={{ 
        position: "fixed", 
        top: 10, 
        right: 10, 
        zIndex: 1000, 
        background: "white", 
        padding: "10px", 
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        <div style={{ marginBottom: "8px", fontSize: "12px", fontWeight: "bold" }}>
          状態変更コントロール
        </div>
        <button 
          onClick={() => setIsLoading(!isLoading)}
          style={{ 
            marginRight: "8px",
            padding: "4px 8px",
            fontSize: "12px",
            background: isLoading ? "#ff4444" : "#44ff44",
            color: "white",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer"
          }}
        >
          {isLoading ? "Loading OFF" : "Loading ON"}
        </button>
        <button 
          onClick={() => setHasError(!hasError)}
          style={{ 
            padding: "4px 8px",
            fontSize: "12px",
            background: hasError ? "#ff4444" : "#44ff44",
            color: "white",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer"
          }}
        >
          {hasError ? "Error OFF" : "Error ON"}
        </button>
      </div>
      
      {/* 実際のAuthForm */}
      <AuthForm {...args} />
    </div>
  );
};

export const Register: Story = {
  args: {
    isLogin: false,
  },
};

export const Login: Story = {
  args: {
    isLogin: true,
  },
};

export const RegisterWithStateControl: Story = {
  render: (args) => (
    <AuthFormWithState {...args} isLogin={false} />
  ),
};

export const LoginWithStateControl: Story = {
  render: (args) => (
    <AuthFormWithState {...args} isLogin={true} />
  ),
};

export const RegisterWithCustomButton: Story = {
  args: {
    isLogin: false,
    buttonLabel: "アカウントを作成",
  },
};

export const LoginWithCustomButton: Story = {
  args: {
    isLogin: true,
    buttonLabel: "サインイン",
  },
};
