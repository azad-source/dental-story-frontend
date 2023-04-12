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

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/auth/authorization" element={<AuthorizationPage />} />
            <Route path="/auth/registration" element={<RegistrationPage />} />
            <Route path="/patients" element={<PatientsPage />} />
            <Route path="/patients/:patientId" element={<PatientDetailPage />} />
            <Route path="/patients/new" element={<NewPatientPage />} />
            <Route path="/patients/:patientId/:toothId" element={<ToothDetailPage />} />
            <Route path="/patients/:patientId/new" element={<NewToothPage />} />
        </Routes>
    );
};
