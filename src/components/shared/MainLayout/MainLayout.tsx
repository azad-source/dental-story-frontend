import { BreadcrumbProps } from '../Breadcrumbs/Breadcrumbs';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './MainLayout.module.scss';
import { PageNavigation } from '../PageNavigation/PageNavigation';
import { Sidebar } from '../Sidebar/Sidebar';

interface IProps {
    breadcrumbs?: BreadcrumbProps[];
    showBackButton?: boolean;
    children?: React.ReactNode;
}

export const MainLayout: React.FC<IProps> = ({ breadcrumbs, showBackButton = false, children }) => {
    return (
        <div className={styles.root}>
            <Header />
            <ErrorBoundary>
                <div className={styles.backplate}>
                    <Sidebar />
                    <div className={styles.content}>
                        <PageNavigation showBackButton={showBackButton} breadcrumbs={breadcrumbs} />
                        <div className={styles.content__inner}>{children}</div>
                    </div>
                </div>
            </ErrorBoundary>
            <Footer />
        </div>
    );
};
