import { BreadcrumbProps, Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './MainLayout.module.scss';
import cx from 'clsx';

interface IProps {
    breadcrumbs?: BreadcrumbProps[];
    children?: React.ReactNode;
}

export const MainLayout: React.FC<IProps> = ({ breadcrumbs, children }) => {
    return (
        <div className={styles.root}>
            <Header />
            {!!breadcrumbs && <Breadcrumbs items={breadcrumbs} className="container" />}
            <div className={cx(styles.inner, 'container')}>{children}</div>
            <Footer />
        </div>
    );
};
