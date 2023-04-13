import * as React from 'react';
import { Loader } from 'components/shared/Loader/Loader';
import styles from './Modal.module.scss';
import cx from 'clsx';

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

    return (
        <div className={styles.root}>
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
