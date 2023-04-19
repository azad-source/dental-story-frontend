import { MainLayout } from '../MainLayout/MainLayout';
import { Spinner } from '../Spinner/Spinner';
import styles from './LoadingPage.module.scss';

export const LoadingPage = () => {
    return (
        <MainLayout>
            <div className={styles.root}>
                <Spinner type="music" />
            </div>
        </MainLayout>
    );
};
