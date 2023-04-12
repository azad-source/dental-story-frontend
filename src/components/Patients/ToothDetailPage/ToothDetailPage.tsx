import { MainLayout } from 'components/shared/MainLayout/MainLayout';
import { useParams } from 'react-router-dom';

export const ToothDetailPage = () => {
    const { patientId, toothId } = useParams<{ patientId: string; toothId: string }>();

    return (
        <MainLayout>
            <div>ToothDetailPage </div>
            <div>patientId: {patientId}</div>
            <div>toothId: {toothId}</div>
        </MainLayout>
    );
};
