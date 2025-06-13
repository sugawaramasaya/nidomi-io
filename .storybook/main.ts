import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  webpackFinal: async (config) => {
    // SVGをReactコンポーネントとして扱うためのSVGR設定
    const fileLoaderRule = config.module?.rules?.find(
      (rule) =>
        typeof rule !== "string" &&
        rule?.test instanceof RegExp &&
        rule.test.test(".svg")
    );

    if (fileLoaderRule && typeof fileLoaderRule !== "string") {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    config.module?.rules?.push({
      test: /\.svg$/i,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

export default config;
