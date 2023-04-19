import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { SITE_NAME } from 'variables';
import { authLoginPath, authPath, patientsPath } from 'domain/routes';
import { logout, useAuth } from 'store/apiConfig';

const navClass = ({ isActive, isPending }: any) =>
    isPending ? styles.navLink_pending : isActive ? styles.navLink_active : '';

export const Header = () => {
    const [logged] = useAuth();

    return (
        <header>
            <nav>
                <div className="nav-wrapper container">
                    <NavLink to="/" className="brand-logo">
                        {SITE_NAME}
                    </NavLink>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <CustomNavLink to="/" title="Главная" />
                        <CustomNavLink to={patientsPath} title="Пациенты" />
                        {!logged ? (
                            <CustomNavLink to={authLoginPath} title="Войти" />
                        ) : (
                            <CustomNavLink onClick={logout} title="Выйти" to={authPath} />
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

interface IPropsCustomNavLink {
    to?: string;
    title: string;
    onClick?: () => void;
}

const CustomNavLink: React.FC<IPropsCustomNavLink> = ({ title, to = '', onClick }) => {
    const handleClick = (e: React.MouseEvent) => {
        if (onClick) {
            e.stopPropagation();
            e.preventDefault();
            console.log('клик по выйти');

            onClick();
        }
    };

    return (
        <li>
            <NavLink to={to} className={navClass} onClick={handleClick}>
                {title}
            </NavLink>
        </li>
    );
};
