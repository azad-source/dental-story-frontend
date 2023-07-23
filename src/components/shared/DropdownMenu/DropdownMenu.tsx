import { useEffect, useState } from 'react';
import { Link } from '../Link/Link';
import styles from './DropdownMenu.module.scss';
import { MenuItemType } from '../Header/Header';
import cx from 'clsx';

interface IProps {
    items: MenuItemType[];
    children: string | JSX.Element | JSX.Element[];
    className?: string;
}

export const DropdownMenu: React.FC<IProps> = ({ items, children, className }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleClick = (e: React.MouseEvent, onClick?: () => void) => {
        if (onClick) {
            e.preventDefault();
            e.stopPropagation();
            return onClick();
        }
    };

    const toggleDropdownMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setShowDropdown((p) => !p);
    };

    useEffect(() => {
        const closeDropdown = () => {
            setShowDropdown(false);
        };
        document.addEventListener('click', closeDropdown);
        return () => {
            document.removeEventListener('click', closeDropdown);
        };
    }, []);

    return (
        <div className={cx(styles.root, className)}>
            <div onClick={toggleDropdownMenu}>{children}</div>
            {showDropdown && (
                <div className={styles.list}>
                    {items.map(({ caption, link, handler }) => (
                        <div key={`${caption}`} className={styles.list__item}>
                            <Link href={link} onClick={(e) => handleClick(e, handler)}>
                                {caption}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
