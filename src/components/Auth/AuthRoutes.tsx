import { useLocation, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

export const AuthRoutes = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.log('location', location);

        if (location.pathname === '/auth') {
            navigate('/auth/authorization');
        }
    }, [location.pathname]);

    return <div></div>;
};
