import { Outlet, Route, Routes } from 'react-router-dom';
import { MainPage } from './MainPage/MainPage';
import { AuthorizationPage } from './Auth/AuthorizationPage/AuthorizationPage';
import { RegistrationPage } from './Auth/RegistrationPage/RegistrationPage';
import { PatientDetailPage } from './Patients/PatientDetailPage/PatientDetailPage';
import { NewPatientPage } from './Patients/NewPatientPage/NewPatientPage';
import { ToothDetailPage } from './Patients/ToothDetailPage/ToothDetailPage';
import { NewToothPage } from './Patients/NewToothPage/NewToothPage';
import { Paths } from 'domain/Paths';
import { ProtectedRoute } from 'utils/ProtectedRoute';
import { useAuth } from 'store/apiConfig';
import { PatientsMain } from './Patients/PatientsMain/PatientsMain';
import { AuthMain } from './Auth/AuthMain/AuthMain';
import { LoadingPage } from './shared/LoadingPage/LoadingPage';
import { useEffect, useState } from 'react';

export const AppRouter = () => {
    const [logged] = useAuth();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <Routes>
            <Route path={Paths.mainPage} element={<ProtectedRoute isLogged={logged} />}>
                <Route path={Paths.mainPage} element={<MainPage />} />
            </Route>

            <Route path={Paths.patients} element={<ProtectedRoute isLogged={logged} />}>
                <Route index element={<PatientsMain />} />
                <Route path={Paths.patient} element={<PatientDetailPage />} />
                <Route path={Paths.newPatient} element={<NewPatientPage />} />
                <Route path={Paths.tooth} element={<ToothDetailPage />} />
                <Route path={Paths.newTooth} element={<NewToothPage />} />
            </Route>

            <Route path={Paths.auth} element={<Outlet />}>
                <Route index element={<AuthMain />} />
                <Route path={Paths.authSignin} element={<AuthorizationPage />} />
                <Route path={Paths.authSignup} element={<RegistrationPage />} />
            </Route>
        </Routes>
    );
};
