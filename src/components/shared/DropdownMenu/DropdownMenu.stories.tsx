import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu } from './DropdownMenu';

const meta = {
    title: 'shared/DropdownMenu',
    component: DropdownMenu,
    tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        items: [
            { caption: 'Главная', link: '/' },
            { caption: 'Пациенты', link: '/patients' },
            { caption: 'Профиль', link: '/profile' },
            { caption: 'Выйти', handler: () => alert('test') },
        ],
        children: <button>Click me</button>,
    },
};
