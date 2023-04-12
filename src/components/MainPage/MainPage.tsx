import { useLocation, useNavigate } from 'react-router-dom';
import { MainLayout } from '../shared/MainLayout/MainLayout';
import { useEffect } from 'react';
import { patientsPath } from 'domain/routes';

export const MainPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === '/') {
            navigate(patientsPath);
        }
    }, [location.pathname]);

    return <MainLayout>MainPage</MainLayout>;
};
