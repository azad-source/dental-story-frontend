import { NavLink } from 'react-router-dom';
import { MainLayout } from '../../shared/MainLayout/MainLayout';
import { Paths } from 'domain/Paths';

interface IPatientItem {
    id: string;
    firstName: string;
    lastName: string;
    middleName: string;
}

export const PatientsPage = () => {
    const patientsList: IPatientItem[] = [
        { id: '1', firstName: 'Иван', lastName: 'Иванов', middleName: 'Иванович' },
        { id: '2', firstName: 'Петр', lastName: 'Петров', middleName: 'Петрович' },
        { id: '3', firstName: 'Александр', lastName: 'Александров', middleName: 'Александрович' },
    ];

    return (
        <MainLayout>
            <h5 className='row'>Пациенты</h5>
            <div>
                {patientsList.map(({ id, firstName, lastName, middleName }, index) => {
                    return (
                        <div key={id} className="row">
                            <div className="col">{++index}</div>
                            <NavLink to={'1'} className="col s11">
                                {lastName} {firstName} {middleName}
                            </NavLink>
                        </div>
                    );
                })}
                <NavLink to={Paths.newPatient} className='btn'>Добавить пациента</NavLink>
            </div>
        </MainLayout>
    );
};
