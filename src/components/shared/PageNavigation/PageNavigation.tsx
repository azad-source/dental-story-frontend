import { BreadcrumbProps, Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Button } from '../Button/Button';
import { BackIcon } from '../icons/BackIcon';
import styles from './PageNavigation.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';

interface IProps {
    showBackButton?: boolean;
    breadcrumbs?: BreadcrumbProps[];
}

export const PageNavigation: React.FC<IProps> = ({ showBackButton = false, breadcrumbs = [] }) => {
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
        <div className={styles.subHeader}>
            <div className={styles.subHeader__inner}>
                {breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
                {showBackButton && (
                    <Button icon={<BackIcon />} use="transparent" width={25} onClick={handleBack} size='xsmall' />
                )}
            </div>
        </div>
    );
};
