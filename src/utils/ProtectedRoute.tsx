import { Paths } from 'domain/Paths';
import { Navigate, Outlet } from 'react-router-dom';

interface IProps {
    isLogged: boolean;
    redirectPath?: string;
}

export const ProtectedRoute: React.FC<IProps> = ({
    isLogged,
    redirectPath = Paths.authSignin,
}) => {
    if (!isLogged) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};
