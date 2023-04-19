import * as React from 'react';
import styles from './Modal.module.scss';
import cx from 'clsx';
import { Loader } from '../Loader/Loader';

interface Props {
    title: string;
    children: React.ReactNode;
    isLoading?: boolean;
    bottomPanel?: React.ReactNode;
    setScroll?: boolean;
    className?: string;
    onClose: () => void;
}

export const Modal: React.FC<Props> = ({
    title,
    children,
    isLoading = false,
    bottomPanel,
    setScroll = false,
    className,
    onClose,
}) => {
    // FIXME: fix dark theme
    const isDark = false; //useAppSelector(isDarkTheme);

    return (
        <div className={cx(styles.root, isDark && styles.root__dark)}>
            <div className={styles.overlay}></div>
            <div className={cx(styles.modal, setScroll && styles.modal_onScroll, className)}>
                <div className={styles.scrollWrapper}>
                    <div className={styles.modal_title}>
                        {title}
                        <div className={styles.modal_close} onClick={onClose} />
                    </div>
                    <Loader isLoading={isLoading}>{children}</Loader>
                    {!!bottomPanel && <div className={styles.modal_bottomPanel}>{bottomPanel}</div>}
                </div>
            </div>
        </div>
    );
};
