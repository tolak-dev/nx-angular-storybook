import type { Meta, StoryObj } from '@storybook/angular';

import { TailwindIconComponent } from './tailwind-icon/tailwind-icon.component';
import { PublishIconComponent } from './publish-icon/publish-icon.component';
import { ReusableIconComponent } from './reusable-icon/reusable-icon.component';
import { StorybookIconComponent } from './storybook-icon/storybook-icon.component';

const meta: Meta = {
  title: 'Icons/AllIcons',
  argTypes: {
    size: { control: 'text' },
    color: { control: 'text' },
  },
  render: (args) => ({
    props: args,
    imports: [
      TailwindIconComponent,
      PublishIconComponent,
      ReusableIconComponent,
      StorybookIconComponent,
    ],
    template: `
      <div class="grid grid-cols-4 gap-6 p-6 bg-gray-50 rounded-lg">
        <div class="flex flex-col items-center gap-2">
          <lib-tailwind-icon [size]="size" [color]="color"></lib-tailwind-icon>
          <span class="text-xs">Tailwind</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <lib-storybook-icon [size]="size" [color]="color"></lib-storybook-icon>
          <span class="text-xs">Storybook</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <lib-publish-icon [size]="size" [color]="color"></lib-publish-icon>
          <span class="text-xs">Publish</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <lib-reusable-icon [size]="size" [color]="color"></lib-reusable-icon>
          <span class="text-xs">Reusable</span>
        </div>
      </div>
    `,
  }),
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    size: 'h-10 w-10',
    color: 'text-gray-700',
  },
};
