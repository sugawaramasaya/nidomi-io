import React from "react";
import TextButton from "./TextButton";

export default {
  component: TextButton,
  title: "Components/TextButton",
  tags: ["autodocs"],
};

export const TextPrimaryLarge = () => <TextButton variant="primary" size="large">Primary Large</TextButton>;
export const TextPrimary = () => <TextButton variant="primary">Primary Medium</TextButton>;
export const DisabledTextPrimary = () => <TextButton variant="primary" disabled>Disable Primary Medium</TextButton>;
export const FullWidthTextPrimary = () => <TextButton variant="primary" fullWidth>Full Width Primary Medium</TextButton>;
export const TextSecondaryLarge = () => <TextButton variant="secondary" size="large">Secondary Large Medium</TextButton>;
export const TextSecondary = () => <TextButton variant="secondary">Secondary Medium Medium</TextButton>;
export const DisabledTextSecondary = () => <TextButton variant="secondary" disabled>Disable Secondary Medium</TextButton>;
export const FullWidthTextSecondary = () => <TextButton variant="secondary" fullWidth>Full Width Secondary Medium</TextButton>;