import { Meta, StoryObj } from '@storybook/react';
import AvatarPlaceholder from './avatar-placeholder';

const meta = {
  title: 'ui/AvatarPlaceholder',
  component: AvatarPlaceholder,
} satisfies Meta<typeof AvatarPlaceholder>;

export default meta;
type Story = StoryObj<typeof meta>;
export const KoreanOne_Character: Story = {
  args: {
    name: '광',
  },
};
export const Korean_TwoCharacter: Story = {
  args: {
    name: '신광',
  },
};
export const Korean_ThreeCharacter: Story = {
  args: {
    name: '이신광',
  },
};
export const English_OneCharacter: Story = {
  args: {
    name: 'a',
  },
};

export const English_TwoCharacter: Story = {
  args: {
    name: 'ab',
  },
};
export const English_ThreeCharacter: Story = {
  args: {
    name: 'abc',
  },
};
