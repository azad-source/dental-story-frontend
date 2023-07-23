import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import cx from 'clsx';
import { LEFT_MENU_ITEMS } from 'domain/menu';

interface Props {
    isDark?: boolean;
}

export const Menu: React.FC<Props> = ({ isDark = false }) => {
    return (
        <div className={cx(styles.root, isDark && styles.root__dark)}>
            {LEFT_MENU_ITEMS.length > 0 &&
                LEFT_MENU_ITEMS.map(({ caption, link, handler }, idx) => {
                    if (link || handler) {
                        return (
                            <NavLink
                                key={`idx_${idx}`}
                                className={styles.menuItem}
                                to={link || ''}
                                onClick={handler}
                                // exact
                            >
                                {caption}
                            </NavLink>
                        );
                    }
                    return (
                        <div key={`idx_${idx}`} className={styles.menuItem}>
                            {caption}
                        </div>
                    );
                })}
        </div>
    );
};
