import { IPatient } from 'store/models/patientModel';

export const patientMock: IPatient = {
    id: '1',
    firstName: 'Константинополь',
    lastName: 'Константинопольский',
    middleName: 'Константинополевич',
    phone: '+7 999 888 77 66',
    doctors: [
        { name: 'Иванов Иван Иванович', recordCount: 2 },
        { name: 'Петров Петр Петрович', recordCount: 1 },
    ],
    totalRecords: 3,
    birthday: '17.10.2008',
    iin: '760724300757',
    address: 'Мангистауская область г.Актау, 1 мкр. д.1, кв.123',
    cardNumber: '0123456',
    payed: 100500,
    debt: 100500,
    excess: 100500,
    sex: 'men',
    age: 20,
    lastDateReception: {
        doctorName: 'Петров Петр Петрович',
        date: '23.04.2022',
        timePeriod: '10:00 - 12:00',
    },
};

export const patientListMock: IPatient[] = [patientMock, patientMock, patientMock, patientMock];
