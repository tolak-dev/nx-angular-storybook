import type { Meta, StoryObj } from '@storybook/angular';
import { TailwindIconComponent } from './tailwind-icon.component';

const meta: Meta<TailwindIconComponent> = {
  title: 'Icons/TailwindIcon',
  component: TailwindIconComponent,
  argTypes: {
    size: { control: 'text' },
    color: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<TailwindIconComponent>;

export const Default: Story = {
  args: {
    size: 'h-6 w-6',
    color: 'text-blue-500',
  },
};

export const LargePurple: Story = {
  args: {
    size: 'h-10 w-10',
    color: 'text-purple-500',
  },
};
