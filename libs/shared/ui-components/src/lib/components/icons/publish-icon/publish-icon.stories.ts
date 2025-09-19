import type { Meta, StoryObj } from '@storybook/angular';
import { PublishIconComponent } from './publish-icon.component';

const meta: Meta<PublishIconComponent> = {
  title: 'Icons/PublishIcon',
  component: PublishIconComponent,
  argTypes: {
    size: { control: 'text' },
    color: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<PublishIconComponent>;

export const Default: Story = {
  args: {
    size: 'h-6 w-6',
    color: 'text-gray-500',
  },
};

export const LargeRed: Story = {
  args: {
    size: 'h-10 w-10',
    color: 'text-red-500',
  },
};
