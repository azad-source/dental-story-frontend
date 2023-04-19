import { Route, Routes } from 'react-router-dom';
import { MainPage } from './MainPage/MainPage';
import { AuthRoutes } from './Auth/AuthRoutes';
import { PatientsPage } from './Patients/PatientsPage/PatientsPage';
import { AuthorizationPage } from './Auth/AuthorizationPage/AuthorizationPage';
import { RegistrationPage } from './Auth/RegistrationPage/RegistrationPage';
import { PatientDetailPage } from './Patients/PatientDetailPage/PatientDetailPage';
import { NewPatientPage } from './Patients/NewPatientPage/NewPatientPage';
import { ToothDetailPage } from './Patients/ToothDetailPage/ToothDetailPage';
import { NewToothPage } from './Patients/NewToothPage/NewToothPage';
import { ProtectedRoute } from 'utils/ProtectedRoute';
import { useAuth } from 'store/apiConfig';
import { Paths } from 'domain/Paths';

export const AppRouter = () => {
    const [logged] = useAuth();
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path={`${Paths.auth}/*`} element={<AuthRoutes />} />
            <Route path={Paths.authSignin} element={<AuthorizationPage />} />
            <Route path={Paths.authSignup} element={<RegistrationPage />} />

            <Route element={<ProtectedRoute isLogged={logged} />}>
                <Route path={Paths.patients} element={<PatientsPage />} />
                <Route path={Paths.patient} element={<PatientDetailPage />} />
                <Route path={Paths.newPatient} element={<NewPatientPage />} />
                <Route path={Paths.tooth} element={<ToothDetailPage />} />
                <Route path={Paths.newTooth} element={<NewToothPage />} />
            </Route>
        </Routes>
    );
};
