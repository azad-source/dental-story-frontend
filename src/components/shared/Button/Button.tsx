import * as React from 'react';
import cx from 'clsx';
import styles from './Button.module.scss';
import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

type ButtonUse = 'link' | 'default' | 'transparent';

interface Props {
    className?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    use?: ButtonUse;
    type?: 'button' | 'submit' | 'reset' | undefined;
    icon?: React.ReactNode;
    title?: string;
    size?: 'small' | 'middle' | 'large';
    to?: string;
    onClick?: (e: MouseEvent) => void;
}

export const Button: React.FC<Props> = ({
    className,
    children,
    use = 'default',
    disabled,
    icon,
    title,
    size = 'middle',
    to,
    ...props
}) => {
    // FIXME: fix dark theme
    const isDark = false; //useAppSelector(isDarkTheme);

    const navigate = useNavigate();

    const handleToLink = (e: React.MouseEvent) => {
        if (to) {
            e.stopPropagation();
            e.preventDefault();
            navigate(to);
        }
    };

    return (
        <div className={className} onClick={handleToLink}>
            <button
                disabled={disabled}
                className={cx(
                    styles.root,
                    styles[use],
                    disabled && styles.disabled,
                    styles[size],
                    isDark && styles.root__dark,
                )}
                title={title}
                {...props}
            >
                {!!icon && <div className={styles.icon}>{icon}</div>}
                {children}
            </button>
        </div>
    );
};
