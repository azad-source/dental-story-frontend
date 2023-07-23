import { MainLayout } from '../../shared/MainLayout/MainLayout';
import { Paths } from 'domain/Paths';
import styles from './PatientsMain.module.scss';
import cx from 'clsx';
import { Button } from 'components/shared/Button/Button';
import { IPatient } from 'store/models/patientModel';
import { patientListMock } from 'mock/patientsMock';

export const PatientsMain = () => {
    return (
        <MainLayout showBackButton className={styles.root}>
            <div className={styles.title}>Пациенты</div>
            <div className={styles.tableWrapper}>
                <table className={styles.patients}>
                    <thead>
                        <tr>
                            <th style={{ minWidth: 200 }}>ФИО</th>
                            <th style={{ minWidth: 115 }}>Телефон</th>
                            <th style={{ minWidth: 200 }}>Врачи</th>
                            <th style={{ minWidth: 70 }}>Записей</th>
                            <th style={{ minWidth: 100 }}>Дата рожд.</th>
                            <th style={{ minWidth: 100 }}>ИИН</th>
                            <th style={{ minWidth: 160 }}>Адрес</th>
                            <th style={{ minWidth: 100 }}>Номер карты</th>
                            <th style={{ minWidth: 80 }}>Оплачено</th>
                            <th style={{ minWidth: 80 }}>Долг</th>
                            <th style={{ minWidth: 80 }}>Переплата</th>
                            <th style={{ minWidth: 200 }}>Последний прием</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patientListMock.map((item) => (
                            <PatientRow key={item.id} patient={item} />
                        ))}
                    </tbody>
                </table>
            </div>
            <Button to={Paths.newPatient} className={styles.addPatientButton}>
                Добавить пациента
            </Button>
        </MainLayout>
    );
};

interface IPatientRowProps {
    patient: IPatient;
    className?: string;
}

const PatientRow: React.FC<IPatientRowProps> = ({ patient, className }) => {
    const fullName = `${patient.lastName} ${patient.firstName} ${patient.middleName}`;

    return (
        <tr className={cx(styles.patientRow, className)}>
            <td>{fullName}</td>
            <td>{patient.phone}</td>
            <td>
                {patient.doctors?.map(({ name, recordCount }) => (
                    <div key={name}>
                        <span>{name}</span>
                        <span className={styles.recordCount}>({recordCount})</span>
                    </div>
                ))}
            </td>
            <td>{patient.totalRecords}</td>
            <td>{patient.birthday}</td>
            <td>{patient.iin}</td>
            <td>{patient.address}</td>
            <td>{patient.cardNumber}</td>
            <td>{patient.payed}</td>
            <td>{patient.debt}</td>
            <td>{patient.excess}</td>
            <td>
                <div>{patient.lastDateReception?.doctorName}</div>
                <div>{patient.lastDateReception?.date}</div>
                <div>{patient.lastDateReception?.timePeriod}</div>
            </td>
        </tr>
    );
};
