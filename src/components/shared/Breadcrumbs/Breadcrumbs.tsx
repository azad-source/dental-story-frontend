import { useNavigate } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import cx from 'clsx';

export interface BreadcrumbProps {
    caption: string;
    link?: string;
}

interface IProps {
    items: BreadcrumbProps[];
    className?: string;
}

export const Breadcrumbs: React.FC<IProps> = ({ items, className }) => {
    const navigate = useNavigate();

    const goToPage = (link?: string) => {
        if (link) navigate(link);
    };

    return (
        <div className="container">
            <div className={styles.root}>
                {items.map(({ caption, link }) => (
                    <div key={caption}>
                        <span className={styles.separator}>/</span>
                        <span className={cx(!!link && styles.item)} onClick={() => goToPage(link)}>
                            {caption}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
