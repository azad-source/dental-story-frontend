import { BreadcrumbProps } from 'components/shared/Breadcrumbs/Breadcrumbs';
import { MainLayout } from 'components/shared/MainLayout/MainLayout';
import { Paths } from 'domain/Paths';
import { useParams } from 'react-router-dom';

export const ToothDetailPage = () => {
    const { patientId, toothId } = useParams<{ patientId: string; toothId: string }>();

    const breadcrumbs: BreadcrumbProps[] = [
        { caption: 'Пациенты', link: Paths.patients },
        { caption: patientId || '', link: Paths.getPatientPathById(patientId || '') },
        { caption: toothId || '' },
    ];

    return (
        <MainLayout breadcrumbs={breadcrumbs}>
            <div>ToothDetailPage </div>
            <div>patientId: {patientId}</div>
            <div>toothId: {toothId}</div>
        </MainLayout>
    );
};
