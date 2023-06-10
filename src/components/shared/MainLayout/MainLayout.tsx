import { useLocation, useNavigate } from 'react-router-dom';
import { BreadcrumbProps, Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Button } from '../Button/Button';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { BackIcon } from '../icons/BackIcon';
import styles from './MainLayout.module.scss';

interface IProps {
    breadcrumbs?: BreadcrumbProps[];
    showBackButton?: boolean;
    children?: React.ReactNode;
}

export const MainLayout: React.FC<IProps> = ({ breadcrumbs, showBackButton = false, children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleBack = () => {
        const pathArr = location.pathname.split('/');
        pathArr.pop();

        if (pathArr.length < 2) {
            navigate('/');
            return;
        }
        navigate(pathArr.join('/'));
    };

    return (
        <div className={styles.root}>
            <Header />
            <div className={styles.subHeader}>
                <div className={styles.subHeader__inner}>
                    {/* {!!breadcrumbs && <Breadcrumbs items={breadcrumbs} />} */}
                    {showBackButton && (
                        <Button
                            icon={<BackIcon />}
                            use="transparent"
                            width={50}
                            onClick={handleBack}
                        />
                    )}
                </div>
            </div>
            <div className={styles.backplate}>
                <div className={styles.inner}>
                    <ErrorBoundary>{children}</ErrorBoundary>
                </div>
            </div>
            <Footer />
        </div>
    );
};
