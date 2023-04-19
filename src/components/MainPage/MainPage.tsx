import { useLocation, useNavigate } from 'react-router-dom';
import { MainLayout } from '../shared/MainLayout/MainLayout';
import { useEffect } from 'react';
import { Paths } from 'domain/Paths';

export const MainPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === '/') {
            navigate(Paths.patients);
        }
    }, [location.pathname]);

    return <MainLayout>MainPage</MainLayout>;
};
