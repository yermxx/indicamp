import { Meta, StoryObj } from '@storybook/react';
import JobRoleTag from './job-role-tag';

const meta = {
  title: 'ui/JobRoleTag',
  component: JobRoleTag,
} satisfies Meta<typeof JobRoleTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Backend: Story = {
  args: {
    jobRole: 'BackEnd',
  },
};
export const FrontEnd: Story = {
  args: {
    jobRole: 'FrontEnd',
  },
};
export const FullStack: Story = {
  args: {
    jobRole: 'FullStack',
  },
};
export const PlanMaster: Story = {
  args: {
    jobRole: 'PlanMaster',
  },
};
export const Designer: Story = {
  args: {
    jobRole: 'Designer',
  },
};
