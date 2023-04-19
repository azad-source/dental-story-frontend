export enum USER_ROLES {
    ADMIN = 'ADMIN',
    SUPER_USER = 'SUPER_USER',
    DENTIST = 'DENTIST',
}

enum ResponseStatus {
    OK = 'OK',
    ERROR = 'ERROR',
}

export interface IAuthSignupRequest {
    username: string;
    email: string;
    password: string;
    roles?: USER_ROLES[];
}

export interface IAuthSignupResponse {
    status: ResponseStatus;
    username: string;
    email: string;
    roles: USER_ROLES[];
}

export interface IAuthSigninRequest {
    email: string;
    password: string;
}

export interface IAuthSigninResponse {
    accessToken: string;
}
