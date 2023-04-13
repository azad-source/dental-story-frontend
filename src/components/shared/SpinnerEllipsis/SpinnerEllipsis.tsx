import * as React from 'react';
import styles from './SpinnerEllipsis.module.scss';
import cx from 'clsx';

interface Props {
    withBackground?: boolean;
}

export const SpinnerEllipsis: React.FC<Props> = ({ withBackground = false }) => {
    return (
        <div className={cx(styles.root, withBackground && styles.root_bg)}>
            <div className={styles.ldsEllipsis}>
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
};
