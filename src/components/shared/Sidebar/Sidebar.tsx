import { useState } from 'react';
import styles from './Sidebar.module.scss';
import cx from 'clsx';
import { ArrowdownIcon } from '../icons/ArrowdownIcon';
import { ArrowupIcon } from '../icons/ArrowupIcon';
import { useNavigate } from 'react-router-dom';
import { MENU_ITEMS, MenuItemType } from 'domain/menu';

export const Sidebar = () => {
    return (
        <div className={styles.root}>
            <div className={styles.menu}>
                {MENU_ITEMS.map((v) => (
                    <MenuItem value={v} key={v.caption} />
                ))}
            </div>
        </div>
    );
};

interface IMenuItemProps {
    value: MenuItemType;
}

const MenuItem: React.FC<IMenuItemProps> = ({ value }) => {
    const navigate = useNavigate();

    const { caption, link, icon, subItems } = value;

    /** 0 - состояние при загрузке страницы
     *  1 - состояние после раскрытия
     *  2 - состояние после скрытия
     */
    const [expand, setExpand] = useState<0 | 1 | 2>(0);

    const hasSubmenu = !!subItems?.length;

    const handleClick = () => {
        if (hasSubmenu) {
            setExpand(expand === 1 ? 2 : 1);
            return;
        }
        navigate(link);
    };

    return (
        <div className={styles.menu__item}>
            <div className={styles.title} onClick={handleClick}>
                <div className={styles.title__icon}>{icon}</div>
                <div className={styles.title__caption}>{caption}</div>
                {hasSubmenu && (expand === 1 ? <ArrowupIcon /> : <ArrowdownIcon />)}
            </div>
            {hasSubmenu && (
                <div
                    className={cx(
                        styles.submenu,
                        expand === 1 && styles.submenu_expand,
                        expand === 2 && styles.submenu_hide,
                    )}
                >
                    {subItems?.map((v) => {
                        const handleClick = () => navigate(v.link);
                        return (
                            <div
                                key={v.caption}
                                className={styles.submenu__item}
                                onClick={handleClick}
                            >
                                {v.caption}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
