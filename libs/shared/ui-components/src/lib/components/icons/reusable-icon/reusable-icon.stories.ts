import type { Meta, StoryObj } from '@storybook/angular';
import { ReusableIconComponent } from './reusable-icon.component';

const meta: Meta = {
  title: 'Icons/ReusableIcon',
  component: ReusableIconComponent,
  argTypes: {
    size: { control: 'text' },
    color: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<ReusableIconComponent>;

export const Default: Story = {
  args: {
    size: 'h-6 w-6',
    color: 'text-gray-500',
  },
};

export const LargeBlue: Story = {
  args: {
    size: 'h-10 w-10',
    color: 'text-blue-500',
  },
};
