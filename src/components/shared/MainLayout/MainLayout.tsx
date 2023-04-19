import { BreadcrumbProps, Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './MainLayout.module.scss';

interface IProps {
    breadcrumbs?: BreadcrumbProps[];
    children?: React.ReactNode;
}

export const MainLayout: React.FC<IProps> = ({ breadcrumbs, children }) => {
    return (
        <div className={styles.root}>
            <Header />
            {!!breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
            <div className={styles.inner}>
                <ErrorBoundary>{children}</ErrorBoundary>
            </div>
            <Footer />
        </div>
    );
};
