import { USER_ROLES } from './authModels';

export interface IUser {
    id: string;
    username: string;
    email: string;
    roles: USER_ROLES[];
}
