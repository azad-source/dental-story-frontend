import * as React from 'react';
import styles from './Link.module.scss';
import cx from 'clsx';

interface Props
    extends React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
    > {
    size?: 'xsmall' | 'small' | 'medium' | 'large';
    className?: string;
}

export const Link: React.FC<Props> = ({ size = 'medium', className, ...props }) => {
    // FIXME: fix dark theme
    const isDark = false; //useAppSelector(isDarkTheme);

    return (
        <div className={cx(styles.root, isDark && styles.root__dark, className)}>
            <a className={cx(styles.link, styles[size])} {...props}>
                {props.children}
            </a>
        </div>
    );
};
