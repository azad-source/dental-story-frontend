import { authLoginPath } from 'domain/routes';
import { Navigate, Outlet } from 'react-router-dom';

interface IProps {
    isLogged: boolean;
    redirectPath?: string;
}

export const ProtectedRoute: React.FC<IProps> = ({ isLogged, redirectPath = authLoginPath }) => {
    if (!isLogged) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};
