export class Paths {
    public static readonly mainPage = '/';
    public static readonly auth = '/auth';
    public static readonly authSignup = `${Paths.auth}/registration`;
    public static readonly authSignin = `${Paths.auth}/authorization`;
    public static readonly patients = '/patients';
    public static readonly patient = `${Paths.patients}/:patientId`;
    public static readonly newPatient = `${Paths.patients}/new`;
    public static readonly tooth = `${Paths.patient}/:toothId`;
    public static readonly newTooth = `${Paths.patient}/new`;
    public static readonly schedule = '/schedule';
    public static readonly primaryInspection = '/primary-inspection';
    public static readonly diseaseHistory = '/disease-history';
    public static readonly laboratoryWorks = '/laboratory-works';
    public static readonly reports = '/reports';
    public static readonly settings = '/settings';
    public static getPatientPathById = (id: string) => `${Paths.patients}/${id}`;
}
