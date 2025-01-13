import { Meta, StoryObj } from '@storybook/react';
import TechStack from './tech-stack';

const meta = {
  title: 'ui/TechStack',
  component: TechStack,
} satisfies Meta<typeof TechStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const JavaScript: Story = {
  args: {
    techName: 'javascript',
  },
};
export const TypeScript: Story = {
  args: {
    techName: 'typescript',
  },
};
export const NextJS: Story = {
  args: {
    techName: 'nextjs',
  },
};
export const Spring: Story = {
  args: {
    techName: 'spring',
  },
};
