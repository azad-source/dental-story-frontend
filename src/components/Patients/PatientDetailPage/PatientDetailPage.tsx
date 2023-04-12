import { BreadcrumbProps } from 'components/shared/Breadcrumbs/Breadcrumbs';
import { MainLayout } from 'components/shared/MainLayout/MainLayout';
import { patientsPath } from 'domain/routes';
import { NavLink, useParams } from 'react-router-dom';

export const PatientDetailPage = () => {
    const { patientId } = useParams<{ patientId: string }>();

    const breadcrumbs: BreadcrumbProps[] = [
        { caption: 'Пациенты', link: patientsPath },
        { caption: patientId || '' },
    ];

    return (
        <MainLayout breadcrumbs={breadcrumbs}>
            <div>PatientDetailPage this id: {patientId}</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <NavLink to={'1'}>Зуб #10</NavLink>
                <NavLink to={'2'}>Зуб #15</NavLink>
                <NavLink to={'3'}>Зуб #22</NavLink>
                <NavLink to={'new'}>Добавить зуб</NavLink>
            </div>
        </MainLayout>
    );
};
