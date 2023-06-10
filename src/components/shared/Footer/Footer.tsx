import { TextPlain } from 'components/shared/TextPlain/TextPlain';
import * as React from 'react';
import styles from './Footer.module.scss';
import cx from 'clsx';
import { SITE_NAME } from 'variables/fieldVariables';

interface Props {
    isDark?: boolean;
}

export const Footer: React.FC<Props> = ({ isDark = false }) => {
    const year = new Date().getFullYear();

    return (
        <footer className={cx(styles.backplate, isDark && styles.backplate__dark)}>
            <div className={styles.root}>
                <div className={cx(styles.item, styles.copyright)}>
                    <TextPlain inverseColor>
                        Copyright © {SITE_NAME} {year}
                    </TextPlain>
                </div>
            </div>
        </footer>
    );
};
