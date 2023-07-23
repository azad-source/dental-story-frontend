import { Meta, StoryObj } from '@storybook/react';
import { PageNavigation } from './PageNavigation';

const meta = {
    title: 'shared/PageNavigation',
    component: PageNavigation,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ width: 400, border: '1px solid #ccc', padding: 15 }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof PageNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithBackButton: Story = {
    args: {
        showBackButton: true,
    },
};

export const WithBackButtonAndBreadcrumbs: Story = {
    args: {
        showBackButton: true,
        breadcrumbs: [
            { caption: 'Main', link: '/' },
            { caption: 'Page', link: '/page' },
        ],
    },
};
