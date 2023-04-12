import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './MainLayout.module.scss';
import cx from 'clsx';

interface IProps {
    children?: React.ReactNode;
}

export const MainLayout: React.FC<IProps> = ({ children }) => {
    return (
        <div className={styles.root}>
            <Header />
            <div className={cx(styles.inner, 'container')}>{children}</div>
            <Footer />
        </div>
    );
};
