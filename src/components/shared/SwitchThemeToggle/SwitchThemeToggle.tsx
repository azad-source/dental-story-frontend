import * as React from 'react';
import { Toggle } from '../Toggle/Toggle';
import styles from './SwitchThemeToggle.module.scss';
import cx from 'clsx';

interface Props {
    isDark?: boolean;
    className?: string;
    themeToggler: () => void;
}

export const SwitchThemeToggle: React.FC<Props> = ({ isDark = false, className, themeToggler }) => (
    <Toggle
        onChange={themeToggler}
        position={isDark ? 'left' : 'right'}
        items={['light', 'dark']}
        className={cx(styles.toggle, className)}
        isDark={isDark}
    />
);
