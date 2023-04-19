import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Paths } from 'domain/Paths';
import { MainLayout } from 'components/shared/MainLayout/MainLayout';

export const AuthMain = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === Paths.auth) {
            navigate(Paths.authSignin);
        }
    }, [location.pathname]);

    return <MainLayout></MainLayout>;
};
