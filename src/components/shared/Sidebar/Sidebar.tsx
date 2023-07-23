import { useState } from 'react';
import { CalendarIcon } from '../icons/CalendarIcon';
import { DentistIcon } from '../icons/DentistIcon';
import { PeopleIcon } from '../icons/PeopleIcon';
import { ReportIcon } from '../icons/ReportIcon';
import styles from './Sidebar.module.scss';
import cx from 'clsx';
import { ArrowdownIcon } from '../icons/ArrowdownIcon';
import { ArrowupIcon } from '../icons/ArrowupIcon';

export const Sidebar = () => {
    const [expand, setExpand] = useState<0 | 1 | 2>(0);

    const handleToggleExpand = () => setExpand(expand === 1 ? 2 : 1);

    return (
        <div className={styles.root}>
            <div className={styles.menu}>
                <div className={styles.menu__item}>
                    <div className={styles.title}>
                        <CalendarIcon className={styles.icon} />
                        Расписание
                    </div>
                </div>
                <div className={styles.menu__item}>
                    <div className={styles.title}>
                        <PeopleIcon className={styles.icon} />
                        Пациенты
                    </div>
                </div>
                <div className={styles.menu__item}>
                    <div className={styles.title} onClick={handleToggleExpand}>
                        <DentistIcon className={styles.icon} />
                        Врачебная часть
                        {expand === 1 ? (
                            <ArrowupIcon className={styles.arrowIcon} />
                        ) : (
                            <ArrowdownIcon className={styles.arrowIcon} />
                        )}
                    </div>
                    <div
                        className={cx(
                            styles.submenu,
                            expand === 1 && styles.submenu_expand,
                            expand === 2 && styles.submenu_hide,
                        )}
                    >
                        <div className={styles.submenu__item}>Первичный осмотр</div>
                        <div className={styles.submenu__item}>История болезни</div>
                        <div className={styles.submenu__item}>Лабораторные работы</div>
                    </div>
                </div>
                <div className={styles.menu__item}>
                    <div className={styles.title}>
                        <ReportIcon className={styles.icon} />
                        Отчёты
                    </div>
                </div>
            </div>
        </div>
    );
};
