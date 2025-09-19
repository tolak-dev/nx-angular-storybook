import { dirname, join } from 'path';
import type { StorybookConfig } from '@storybook/angular';

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-docs'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/angular'),
    options: {},
  },
  docs: { defaultName: 'Docs' },
  env: (config) => ({
    ...config,
    NODE_ENV: 'development',
  }),
  previewHead: (head) => `
    ${head}
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  `,
};

export default config;
