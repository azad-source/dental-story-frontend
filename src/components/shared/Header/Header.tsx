import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'store/apiConfig';
import { SITE_NAME } from 'variables/fieldVariables';
import { AvatarMini } from '../AvatarMini/AvatarMini';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';

export const Header = () => {
    const [logged] = useAuth();

    return (
        <header className={styles.backplate}>
            <div className={styles.root}>
                <NavLink className={styles.logo} to="/">
                    <div className={styles.logoIcon}>{SITE_NAME}</div>
                </NavLink>
                {logged && (
                    <DropdownMenu className={styles.dropdownMenu}>
                        <AvatarMini name="Azad Mamedov" />
                    </DropdownMenu>
                )}
            </div>
        </header>
    );
};
