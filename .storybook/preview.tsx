// .storybook/preview.tsx
import React from "react";
import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
  },
};

export const decorators = [
  (Story) => {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "var(--background)" }}>
        <Story />
      </div>
    );
  },
];

export default preview;
