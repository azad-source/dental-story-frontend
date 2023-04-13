import * as React from 'react';
import styles from './SpinnerMusic.module.scss';
import cx from 'clsx';

interface Props {
    withBackground?: boolean;
}

export const SpinnerMusic: React.FC<Props> = ({ withBackground = false }) => {
    return (
        <div className={cx(styles.root, withBackground && styles.root_bg)}>
            <span className={styles.loader}></span>
        </div>
    );
};
