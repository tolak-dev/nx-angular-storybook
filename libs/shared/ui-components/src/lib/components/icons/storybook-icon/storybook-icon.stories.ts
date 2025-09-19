import type { Meta, StoryObj } from '@storybook/angular';
import { StorybookIconComponent } from './storybook-icon.component';

const meta: Meta = {
  title: 'Icons/StorybookIcon',
  component: StorybookIconComponent,
  argTypes: {
    size: { control: 'text' },
    color: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<StorybookIconComponent>;

export const Default: Story = {
  args: {
    size: 'h-6 w-6',
    color: 'text-purple-500',
  },
};

export const LargePurple: Story = {
  args: {
    size: 'h-10 w-10',
    color: 'text-purple-500',
  },
};
