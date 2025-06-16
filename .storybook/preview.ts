// .storybook/preview.tsx
import React from "react";
import type { Preview, StoryFn, StoryContext } from "@storybook/react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
  },
};

export const decorators = [
  (Story: StoryFn, context: StoryContext) => {
    return React.createElement(
      "div",
      { style: { minHeight: "100vh", backgroundColor: "var(--background)" } },
      Story({}, context)
    );
  },
];

export default preview;
