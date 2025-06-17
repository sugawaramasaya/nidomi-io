// src/components/Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  render: () => <Button variant="primary">Primary Button</Button>,
};

export const PrimaryDisabled: Story = {
  render: () => (
    <Button variant="primary" disabled>
      Primary Disabled
    </Button>
  ),
};

export const PrimaryFullWidth: Story = {
  render: () => (
    <Button variant="primary" fullWidth>
      Primary Full Width
    </Button>
  ),
};

export const Secondary: Story = {
  render: () => <Button variant="secondary">Secondary Button</Button>,
};

export const SecondaryDisabled: Story = {
  render: () => (
    <Button variant="secondary" disabled>
      Secondary Disabled
    </Button>
  ),
};

export const TextPrimary: Story = {
  render: () => <Button variant="text-primary">Text Primary</Button>,
};

export const TextPrimaryDisabled: Story = {
  render: () => (
    <Button variant="text-primary" disabled>
      Text Primary Disabled
    </Button>
  ),
};

export const TextPrimaryFullWidth: Story = {
  render: () => (
    <Button variant="text-primary" fullWidth>
      Text Primary Full Width
    </Button>
  ),
};

export const TextSecondary: Story = {
  render: () => <Button variant="text-secondary">Text Secondary</Button>,
};

export const TextSecondaryDisabled: Story = {
  render: () => (
    <Button variant="text-secondary" disabled>
      Text Secondary Disabled
    </Button>
  ),
};

export const TextSecondaryFullWidth: Story = {
  render: () => (
    <Button variant="text-secondary" fullWidth>
      Text Secondary Full Width
    </Button>
  ),
};

export const Large: Story = {
  render: () => <Button size="large">Large Button</Button>,
};

export const Medium: Story = {
  render: () => <Button size="medium">Medium Button</Button>,
};
