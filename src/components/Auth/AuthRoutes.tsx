import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { authLoginPath, authPath } from 'domain/routes';

export const AuthRoutes = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === authPath) {
            navigate(authLoginPath);
        }
    }, [location.pathname]);

    return <div></div>;
};
