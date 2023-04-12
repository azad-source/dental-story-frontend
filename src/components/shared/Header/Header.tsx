import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { SITE_NAME } from 'variables';

const navClass = ({ isActive, isPending }: any) =>
    isPending ? styles.navLink_pending : isActive ? styles.navLink_active : '';

export const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-wrapper container">
                    <NavLink to="/" className="brand-logo">
                        {SITE_NAME}
                    </NavLink>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <CustomNavLink to="/" title="Главная" />
                        <CustomNavLink to="/patients" title="Пациенты" />
                        <CustomNavLink to="/auth" title="Авторизация" />
                    </ul>
                </div>
            </nav>
        </header>
    );
};

interface IPropsCustomNavLink {
    to: string;
    title: string;
}

const CustomNavLink: React.FC<IPropsCustomNavLink> = ({ title, to }) => (
    <li>
        <NavLink to={to} className={navClass}>
            {title}
        </NavLink>
    </li>
);
