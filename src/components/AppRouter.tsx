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
import {
    authLoginPath,
    authPath,
    authRegistrationPath,
    newPatientPath,
    newToothPath,
    patientPath,
    patientsPath,
    toothPath,
} from 'domain/routes';
import { ProtectedRoute } from 'utils/ProtectedRoute';
import { useAuth } from 'store/apiConfig';

export const AppRouter = () => {
    const [logged] = useAuth();
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path={`${authPath}/*`} element={<AuthRoutes />} />
            <Route path={authLoginPath} element={<AuthorizationPage />} />
            <Route path={authRegistrationPath} element={<RegistrationPage />} />

            <Route element={<ProtectedRoute isLogged={logged} />}>
                <Route path={patientsPath} element={<PatientsPage />} />
                <Route path={patientPath} element={<PatientDetailPage />} />
                <Route path={newPatientPath} element={<NewPatientPage />} />
                <Route path={toothPath} element={<ToothDetailPage />} />
                <Route path={newToothPath} element={<NewToothPage />} />
            </Route>
        </Routes>
    );
};
