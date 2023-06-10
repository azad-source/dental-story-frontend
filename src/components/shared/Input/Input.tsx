import * as React from 'react';
import styles from './Input.module.scss';
import cx from 'clsx';
import { InputHTMLAttributes } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
    register?: UseFormRegisterReturn<string>;
    errors?: FieldError;
}

export const Input: React.FC<Props> = (props) => {
    const rootStyles = { width: props.width };
    const type = props.type || 'text';

    // FIXME: fix dark theme
    const isDark = false; //useAppSelector(isDarkTheme);

    return (
        <div className={styles.root} style={rootStyles}>
            {props.required && (
                <span className={styles.root_required} title="Это поле обязательное">
                    *
                </span>
            )}
            <div className={styles.root__wrapper}>
                <input
                    type={type}
                    className={cx(styles.input, props.className, styles[type])}
                    {...props.register}
                    {...props}
                />
                <div onClick={props.onClick}>{props.icon}</div>
            </div>
            <div className={styles.root__error}>{props.errors?.message}</div>
        </div>
    );
};
