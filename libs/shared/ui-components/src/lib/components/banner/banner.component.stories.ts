import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata, applicationConfig } from '@storybook/angular';
import { Component } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideLocationMocks } from '@angular/common/testing';
import { BannerComponent } from './banner.component';

@Component({
  template: '<div>Mock Page</div>',
})
class MockPageComponent {}

const routes = [
  { path: 'about', component: MockPageComponent },
  { path: 'features', component: MockPageComponent },
  { path: 'maintenance', component: MockPageComponent },
  { path: 'pricing', component: MockPageComponent },
  { path: 'security', component: MockPageComponent },
  { path: 'announcements', component: MockPageComponent },
  { path: 'beta', component: MockPageComponent },
];

const meta: Meta<BannerComponent> = {
  title: 'Components/Banner',
  component: BannerComponent,
  decorators: [
    applicationConfig({
      providers: [provideRouter(routes), provideLocationMocks()],
    }),
    moduleMetadata({
      imports: [BannerComponent],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'gray', value: '#f3f4f6' },
        { name: 'dark', value: '#1f2937' },
      ],
    },
  },
  argTypes: {
    title: { control: 'text' },
    message: { control: 'text' },
    ctaLabel: { control: 'text' },
    ctaLink: { control: 'text' },
  },
  args: {
    title: 'Demo Notice',
    message:
      'This site is a demo. Features and functionality are for preview purposes only.',
    ctaLabel: 'Learn more',
    ctaLink: '/about',
  },
};

export default meta;
type Story = StoryObj<BannerComponent>;

export const Default: Story = {};

export const FeatureAnnouncement: Story = {
  args: {
    title: 'New Feature Available',
    message:
      'Try our latest dashboard updates with enhanced analytics and reporting capabilities.',
    ctaLabel: 'Explore now',
    ctaLink: '/features',
  },
};

export const MaintenanceNotice: Story = {
  args: {
    title: 'Scheduled Maintenance',
    message:
      'Our services will be temporarily unavailable on Sunday from 2:00 AM to 4:00 AM EST.',
    ctaLabel: 'View details',
    ctaLink: '/maintenance',
  },
};

export const PromotionalBanner: Story = {
  args: {
    title: 'Limited Time Offer',
    message:
      'Get 50% off premium features for the next 7 days. Upgrade your account today!',
    ctaLabel: 'Upgrade now',
    ctaLink: '/pricing',
  },
};

export const SecurityAlert: Story = {
  args: {
    title: 'Security Update',
    message:
      'We recommend updating your password and enabling two-factor authentication.',
    ctaLabel: 'Update settings',
    ctaLink: '/security',
  },
};

export const DismissalBehavior: Story = {
  parameters: {
    docs: {
      description: {
        story: `
**Testing Dismissal:**
- Click the × button to dismiss the banner.
- The banner disappears and stores dismissal time in localStorage.
- Refresh the page - banner remains hidden for 24 hours.
- Clear localStorage to reset the dismissal state.

**Technical Details:**
- Uses localStorage key: \`demo-banner\`
- Expires after 24 hours (86,400,000 ms)
- Automatically reappears after expiry time.
        `,
      },
    },
  },
};
