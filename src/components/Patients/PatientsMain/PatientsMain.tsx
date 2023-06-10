import { NavLink } from 'react-router-dom';
import { MainLayout } from '../../shared/MainLayout/MainLayout';
import { Paths } from 'domain/Paths';
import styles from './PatientsMain.module.scss';
import cx from 'clsx';
import { Button } from 'components/shared/Button/Button';

type SexType = 'men' | 'woomen';
interface IPatientItem {
    id: string;
    firstName: string;
    lastName: string;
    sex: SexType;
    middleName?: string;
    age?: number;
    lastDateReception?: string;
}

export const PatientsMain = () => {
    const patientsList: IPatientItem[] = [
        {
            id: '1',
            firstName: 'Иван',
            lastName: 'Иванов',
            middleName: 'Иванович',
            sex: 'men',
            age: 20,
            lastDateReception: '23.04.2022',
        },
        {
            id: '2',
            firstName: 'Иван',
            lastName: 'Иванов',
            middleName: 'Иванович',
            sex: 'men',
            age: 20,
            lastDateReception: '23.04.2022',
        },
        {
            id: '3',
            firstName: 'Иван',
            lastName: 'Иванов',
            middleName: 'Иванович',
            sex: 'men',
            age: 20,
            lastDateReception: '23.04.2022',
        },
        {
            id: '4',
            firstName: 'Иван',
            lastName: 'Иванов',
            middleName: 'Иванович',
            sex: 'men',
            age: 20,
            lastDateReception: '23.04.2022',
        },
    ];

    return (
        <MainLayout showBackButton>
            <div className={styles.title}>Пациенты</div>
            <table className={styles.patients}>
                <thead>
                    <tr>
                        <th className={styles.fullName}>Имя</th>
                        <th className={styles.age}>Возраст</th>
                        <th className={styles.lastDateReception}>Дата последнего приема</th>
                        <th className={styles.sex}>Пол</th>
                    </tr>
                </thead>
                <tbody>
                    {patientsList.map((item) => (
                        <PatientRow key={item.id} patient={item} />
                    ))}
                </tbody>
            </table>
            <Button to={Paths.newPatient} className={styles.addPatientButton}>Добавить пациента</Button>
        </MainLayout>
    );
};

interface IPatientRowProps {
    patient: IPatientItem;
    className?: string;
}

const PatientRow: React.FC<IPatientRowProps> = ({ patient, className }) => {
    const { id, firstName, lastName, middleName, age, lastDateReception, sex } = patient;

    const fullName = `${lastName} ${firstName} ${middleName}`;

    return (
        <tr className={cx(styles.patientRow, className)}>
            <td className={styles.fullName}>
                <NavLink to={id}>{fullName}</NavLink>
            </td>
            <td className={styles.age}>{age || '—'}</td>
            <td className={styles.lastDateReception}>{lastDateReception || '—'}</td>
            <td className={styles.sex}>{sex}</td>
        </tr>
    );
};
