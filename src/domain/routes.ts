export const authPath = '/auth';
export const authRegistrationPath = `${authPath}/registration`;
export const authLoginPath = `${authPath}/authorization`;
export const patientsPath = '/patients';
export const patientPath = `${patientsPath}/:patientId`;
export const newPatientPath = `${patientsPath}/new`;
export const toothPath = `${patientPath}/:toothId`;
export const newToothPath = `${patientPath}/new`;

export const getPatientPathById = (id: string) => {
    return `${patientsPath}/${id}`;
};
