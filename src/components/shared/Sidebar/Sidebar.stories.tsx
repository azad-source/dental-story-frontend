import { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';

const meta = {
    title: 'shared/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    // decorators: [
    //     (Story) => (
    //         <div style={{ width: 400, border: '1px solid #ccc', padding: 15 }}>
    //             <Story />
    //         </div>
    //     ),
    // ],
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SearchStart: Story = {
    args: {
        isSuccess: false,
        query: 'Abba',
    },
};

export const SearchEnd: Story = {
    args: {
        isSuccess: true,
        query: 'Abba',
    },
};
