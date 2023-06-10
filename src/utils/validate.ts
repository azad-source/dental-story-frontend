import { EMAIL_REGEX } from 'variables/regexVariables';

export const SIGNIN_EMAIL_VALIDATE = {
    required: {
        value: true,
        message: 'Укажите e-mail',
    },
    pattern: {
        value: EMAIL_REGEX,
        message: 'Некорректный формат почты',
    },
};

export const SIGNIN_PASSWORD_VALIDATE = {
    required: {
        value: true,
        message: 'Укажите пароль',
    },
};
