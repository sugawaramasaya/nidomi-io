import path from "path";
import type { StorybookConfig } from "@storybook/nextjs";
import type { RuleSetRule } from "webpack";

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
    options: {
      builder: {
        name: "webpack5",
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    const fileLoaderRule = config.module?.rules?.find(
      (rule): rule is RuleSetRule =>
        rule !== null &&
        rule !== undefined &&
        typeof rule !== "string" &&
        (rule as RuleSetRule).test instanceof RegExp &&
        ((rule as RuleSetRule).test as RegExp).test(".svg")
    );

    if (fileLoaderRule) {
      (fileLoaderRule as RuleSetRule).exclude = /\.svg$/i;
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

    if (config.resolve) {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "@": path.resolve(__dirname, "../src"),
      };
    }

    // 不要なstorybook-stories.js参照回避（重要）
    config.entry = config.entry?.filter?.((entry: string) => {
      return !entry.includes(".storybook");
    });

    return config;
  },
};

export default config;
