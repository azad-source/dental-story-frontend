import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Paths } from 'domain/Paths';

export const AuthRoutes = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === Paths.auth) {
            navigate(Paths.authSignin);
        }
    }, [location.pathname]);

    return <div></div>;
};
