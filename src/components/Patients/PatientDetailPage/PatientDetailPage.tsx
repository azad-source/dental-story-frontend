import { BreadcrumbProps } from 'components/shared/Breadcrumbs/Breadcrumbs';
import { MainLayout } from 'components/shared/MainLayout/MainLayout';
import { Paths } from 'domain/Paths';
import { NavLink, useParams } from 'react-router-dom';
import styles from './PatientDetailPage.module.scss';
import { Tabs } from 'components/shared/Tabs/Tabs';
import { useState } from 'react';

const tabs = [
    'зуб 1/21.02.2023',
    'зуб 2/21.02.2023',
    'зуб 3/21.02.2023',
    'зуб 4/21.02.2023',
    'зуб 5/21.02.2023',
    'зуб 6/21.02.2023',
    'зуб 7/21.02.2023',
    'зуб 8/21.02.2023',
    'зуб 9/21.02.2023',
    'зуб 10/21.02.2023',
    'зуб 11/21.02.2023',
    'зуб 12/21.02.2023',
    'зуб 13/21.02.2023',
    'зуб 14/21.02.2023',
];

export const PatientDetailPage = () => {
    const { patientId } = useParams<{ patientId: string }>();
    const [currentTab, setCurrentTab] = useState(0);

    const handleChangeTab = (tab: number) => {
        setCurrentTab(tab);
    };

    // const breadcrumbs: BreadcrumbProps[] = [
    //     { caption: 'Пациенты', link: Paths.patients },
    //     { caption: patientId || '' },
    // ];

    return (
        <MainLayout showBackButton>
            <Tabs items={tabs} value={currentTab} onValueChange={handleChangeTab} />
            <div className={styles.title}>Александров Александр Иванович</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <NavLink to={'1'}>Зуб #10</NavLink>
                <NavLink to={'2'}>Зуб #15</NavLink>
                <NavLink to={'3'}>Зуб #22</NavLink>
                <NavLink to={'new'}>Добавить зуб</NavLink>
            </div>
        </MainLayout>
    );
};
