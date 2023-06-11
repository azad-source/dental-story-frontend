import type { Meta, StoryObj } from '@storybook/react';
import Avatar from 'assets/profile-avatar-200x200.png';

import { AvatarMini } from './AvatarMini';

const meta = {
    title: 'shared/AvatarMini',
    component: AvatarMini,
    tags: ['autodocs'],
} satisfies Meta<typeof AvatarMini>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutAvatar: Story = {
    args: {
        name: 'John Smith',
    },
};

export const WithAvatar: Story = {
    args: {
        name: 'John Smith',
        src: Avatar,
    },
};
