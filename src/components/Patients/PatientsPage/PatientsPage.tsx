import { NavLink } from 'react-router-dom';
import { MainLayout } from '../../shared/MainLayout/MainLayout';

export const PatientsPage = () => {
    return (
        <MainLayout>
            <div>PatientsPage</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <NavLink to={'1'}>Иванов Иван Иванович</NavLink>
                <NavLink to={'2'}>Петров Петр Петрович</NavLink>
                <NavLink to={'3'}>Александров Александр Александрович</NavLink>
                <NavLink to={'new'}>Добавить пациента</NavLink>
            </div>
        </MainLayout>
    );
};
