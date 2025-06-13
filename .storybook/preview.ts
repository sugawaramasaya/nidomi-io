import "../src/app/globals.css";
import type { Preview } from "@storybook/nextjs";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark mode",
      values: [
        { name: "dark mode", value: "var(--surface)" },
        { name: "light mode", value: "var(--surface)" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
