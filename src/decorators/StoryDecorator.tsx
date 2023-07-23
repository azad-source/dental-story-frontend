import { ReactRenderer } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { PartialStoryFn } from '@storybook/types';
import { store } from 'store/store';
import styles from './StoryDecorator.module.scss';

type StoryType = PartialStoryFn<ReactRenderer, { [x: string]: any }>;

export const StoryDecorator = (Story: StoryType) => (
    <Provider store={store}>
        <StoryWrapper Story={Story} />
    </Provider>
);

const StoryWrapper: React.FC<{ Story: StoryType }> = ({ Story }) => {
    return (
        <div className={styles.root}>
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        </div>
    );
};
