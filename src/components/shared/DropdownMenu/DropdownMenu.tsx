import { useEffect, useState } from 'react';
import { Link } from '../Link/Link';
import styles from './DropdownMenu.module.scss';
import cx from 'clsx';
import { MenuItemType } from 'domain/menu';
import { Paths } from 'domain/Paths';
import { logout, useAuth } from 'store/apiConfig';
import { useAppDispatch } from 'store/hooks';
import { useNavigate } from 'react-router-dom';
import { clearCurrentUser } from 'store/slices/authSlice';

interface IProps {
    children: string | JSX.Element | JSX.Element[];
    className?: string;
}

export const DropdownMenu: React.FC<IProps> = ({ children, className }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const [logged] = useAuth();

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const logoutHandler = () => {
        logout();
        dispatch(clearCurrentUser());
        navigate(Paths.authSignin);
    };

    const TOP_MENU_ITEMS: MenuItemType[] = [
        { caption: 'Настройки', link: Paths.settings },
        {
            caption: logged ? 'Выйти' : 'Войти',
            link: !logged ? Paths.authSignin : '',
            handler: logged ? logoutHandler : undefined,
        },
    ];

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
                    {TOP_MENU_ITEMS.map(({ caption, link, handler }) => (
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
