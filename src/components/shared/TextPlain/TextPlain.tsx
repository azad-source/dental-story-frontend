import * as React from 'react';
import styles from './TextPlain.module.scss';
import cx from 'clsx';

interface Props {
    children: React.ReactNode;
    size?: 'small' | 'middle' | 'large';
    inverseColor?: boolean;
    className?: string;
    style?: React.CSSProperties | undefined;
}

export const TextPlain: React.FC<Props> = ({
    children,
    size = 'middle',
    inverseColor = false,
    style,
    className,
}) => {
    // FIXME: fix dark theme
    const isDark = false; //useAppSelector(isDarkTheme);

    return (
        <div
            className={cx(
                styles.root,
                styles[size],
                isDark && styles.root_dark,
                inverseColor && styles.root_inversedColor,
                className,
            )}
            style={style}
        >
            {children}
        </div>
    );
};
