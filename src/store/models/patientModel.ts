export type SexType = 'men' | 'woomen';

export type DoctorInfoType = {
    name: string;
    recordCount: number;
};

export type LastReception = {
    doctorName: string;
    date: string;
    timePeriod: string;
};

export interface IPatient {
    id: string;
    firstName: string;
    lastName: string;
    middleName?: string;
    phone?: string;
    doctors?: DoctorInfoType[];
    totalRecords?: number;
    birthday?: string;
    iin?: string;
    address?: string;
    cardNumber?: string;
    payed?: number;
    debt?: number;
    excess?: number;
    lastDateReception?: LastReception;
    sex: SexType;
    age?: number;
}
