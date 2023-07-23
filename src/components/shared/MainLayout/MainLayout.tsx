import { BreadcrumbProps } from '../Breadcrumbs/Breadcrumbs';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { Footer } from '../Footer/Footer';
import styles from './MainLayout.module.scss';
import { PageNavigation } from '../PageNavigation/PageNavigation';
import { Sidebar } from '../Sidebar/Sidebar';
import { Header } from '../Header/Header';
import { useAuth } from 'store/apiConfig';
import { Loader } from '../Loader/Loader';

interface IProps {
    breadcrumbs?: BreadcrumbProps[];
    showBackButton?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
}

export const MainLayout: React.FC<IProps> = ({
    breadcrumbs,
    showBackButton = false,
    isLoading = false,
    children,
}) => {
    const [logged] = useAuth();
    return (
        <div className={styles.root}>
            <Header />
            <ErrorBoundary>
                <div className={styles.backplate}>
                    {logged && <Sidebar />}
                    <div className={styles.content}>
                        <PageNavigation showBackButton={showBackButton} breadcrumbs={breadcrumbs} />
                        <Loader isLoading={isLoading} className={styles.content__inner}>
                            {children}
                        </Loader>
                    </div>
                </div>
            </ErrorBoundary>
            <Footer />
        </div>
    );
};
