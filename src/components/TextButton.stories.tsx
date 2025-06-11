import React from "react";
import TextButton from "./TextButton";

export default {
  component: TextButton,
  title: "Components/TextButton",
  tags: ["autodocs"],
};

export const TextPrimaryLarge = () => <TextButton variant="primary" size="large">Text Primary Large</TextButton>;
export const TextPrimary = () => <TextButton variant="primary">Text Primary Medium</TextButton>;
export const DisabledTextPrimary = () => <TextButton variant="primary" disabled>Disable Text Primary</TextButton>;
export const FullWidthTextPrimary = () => <TextButton variant="primary" fullWidth>Full Width Text Primary</TextButton>;
export const TextSecondaryLarge = () => <TextButton variant="secondary" size="large">Text Secondary Large</TextButton>;
export const TextSecondary = () => <TextButton variant="secondary">Text Secondary Medium</TextButton>;
export const DisabledTextSecondary = () => <TextButton variant="secondary" disabled>Disable Text Secondary</TextButton>;
export const FullWidthTextSecondary = () => <TextButton variant="secondary" fullWidth>Full Width Text Secondary</TextButton>;