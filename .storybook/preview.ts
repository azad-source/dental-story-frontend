import type { Preview } from '@storybook/react';
import { StoryDecorator } from '../src/decorators/StoryDecorator';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        viewport: {
            viewports: INITIAL_VIEWPORTS,
        },
    },
    decorators: [StoryDecorator],
};

export default preview;
