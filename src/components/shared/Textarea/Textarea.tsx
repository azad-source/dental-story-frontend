import * as React from 'react';
import styles from './Textarea.module.scss';
import cx from 'clsx';

interface Props {
    value?: string;
    type?:
        | 'button'
        | 'checkbox'
        | 'color'
        | 'date'
        | 'datetime-local'
        | 'email'
        | 'file'
        | 'hidden'
        | 'image'
        | 'month'
        | 'number'
        | 'password'
        | 'radio'
        | 'range'
        | 'reset'
        | 'search'
        | 'submit'
        | 'tel'
        | 'text'
        | 'time'
        | 'url'
        | 'week';
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    className?: string;
    autoFocus?: boolean;
    cols?: number;
    rows?: number;
    maxLength?: number;
    minLength?: number;
    width?: number | string;
}

export const Textarea: React.FC<Props> = ({ className, width, ...props }) => {
    // FIXME: fix dark theme
    const isDark = false; //useAppSelector(isDarkTheme);
    const rootStyles = { width };

    return (
        <div className={cx(styles.root, isDark && styles.root__dark)} style={rootStyles}>
            <textarea className={cx(styles.textarea, className)} {...props}></textarea>
        </div>
    );
};
