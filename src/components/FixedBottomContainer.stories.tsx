// src/components/FixedBottomContainer.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import FixedBottomContainer from "./FixedBottomContainer";
import Button from "./Button";

const meta: Meta<typeof FixedBottomContainer> = {
  title: "Components/FixedBottomContainer",
  component: FixedBottomContainer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const PrimaryAndTextSecondary: Story = {
  render: () => (
    <FixedBottomContainer>
      <Button variant="primary" fullWidth>
        Primary Button
      </Button>
      <Button variant="text-secondary" fullWidth>
        Text Secondary Button
      </Button>
    </FixedBottomContainer>
  ),
};

export const PrimaryAndPrimary: Story = {
  render: () => (
    <FixedBottomContainer>
      <Button variant="primary" fullWidth>
        Primary Button A
      </Button>
      <Button variant="primary" fullWidth>
        Primary Button B
      </Button>
    </FixedBottomContainer>
  ),
};

export const PrimaryAndSecondary: Story = {
  render: () => (
    <FixedBottomContainer>
      <Button variant="primary" fullWidth>
        Primary Button
      </Button>
      <Button variant="secondary" fullWidth>
        Secondary Button
      </Button>
    </FixedBottomContainer>
  ),
};

export const KeyboardAware_KeyboardVisible: Story = {
  render: () => (
    <FixedBottomContainer withKeyboardAware>
      <Button variant="primary" fullWidth>
        Primary Only (Keyboard Visible)
      </Button>
    </FixedBottomContainer>
  ),
  parameters: {
    viewport: {
      defaultViewport: "iphonex",
    },
  },
};

export const KeyboardAware_KeyboardHidden: Story = {
  render: () => (
    <FixedBottomContainer withKeyboardAware>
      <Button variant="primary" fullWidth>
        Primary Button
      </Button>
      <Button variant="text-secondary" fullWidth>
        Text Secondary Button
      </Button>
    </FixedBottomContainer>
  ),
  parameters: {
    viewport: {
      defaultViewport: "iphonex",
    },
  },
};
