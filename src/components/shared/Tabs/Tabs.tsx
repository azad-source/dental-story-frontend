import * as React from 'react';
import styles from './Tabs.module.scss';
import cx from 'clsx';

interface Props {
    items: string[];
    value: number;
    className?: string;
    onValueChange: (key: number) => void;
}

export const Tabs: React.FC<Props> = ({ items, value, className, onValueChange }) => {
    // FIXME: fix dark theme
    const isDark = false; //useAppSelector(isDarkTheme);

    return (
        <div className={cx(styles.root, isDark && styles.root__dark, className)}>
            <div className={styles.tabs}>
                {items.map((caption, index) => (
                    <div
                        key={caption}
                        className={cx(
                            styles.tabs__item,
                            index === value && styles.tabs__item_active,
                        )}
                        onClick={() => onValueChange(index)}
                    >
                        {caption}
                    </div>
                ))}
            </div>
            <div className={styles.baseline} />
        </div>
    );
};
