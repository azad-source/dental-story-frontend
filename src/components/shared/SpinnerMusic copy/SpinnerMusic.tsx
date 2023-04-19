import * as React from 'react';
import styles from './SpinnerMusic.module.scss';
import cx from 'clsx';

interface Props {
    withBackground?: boolean;
}

export const SpinnerMusic: React.FC<Props> = ({ withBackground = false }) => {
    // FIXME: fix dark theme
    const isDark = false; //useAppSelector(isDarkTheme);

    return (
        <div
            className={cx(
                styles.root,
                isDark && styles.root__dark,
                withBackground && styles.root_bg,
            )}
        >
            <span className={styles.loader}></span>
        </div>
    );
};
