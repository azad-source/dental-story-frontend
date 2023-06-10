import { RegisterOptions } from 'react-hook-form';
import { EMAIL_REGEX } from 'variables/regexVariables';

export const EMAIL_VALIDATE: RegisterOptions = {
    required: {
        value: true,
        message: 'Укажите e-mail',
    },
    pattern: {
        value: EMAIL_REGEX,
        message: 'Некорректный формат почты',
    },
};

export const SIGNIN_PASSWORD_VALIDATE: RegisterOptions = {
    required: {
        value: true,
        message: 'Укажите пароль',
    },
};

export const SIGNUP_PASSWORD_VALIDATE: RegisterOptions = {
    required: {
        value: true,
        message: 'Укажите пароль',
    },
    minLength: {
        value: 8,
        message: 'Длина пароля должна быть не менее 8 символов',
    },
    maxLength: {
        value: 20,
        message: 'Длина пароля должна быть не более 20 символов',
    },
};

export const SIGNUP_FIRSTNAME_VALIDATE: RegisterOptions = {
    required: {
        value: true,
        message: 'Укажите имя',
    },
    pattern: {
        value: /[а-яА-Я- ёЁ]/,
        message: 'Допускаются только кириллические символы',
    },
    minLength: {
        value: 3,
        message: 'Имя должно состоять из 3-х и более букв',
    },
    maxLength: {
        value: 20,
        message: 'Превышен лимит по длине',
    },
};

export const SIGNUP_LASTNAME_VALIDATE: RegisterOptions = {
    required: {
        value: true,
        message: 'Укажите фамилию',
    },
    pattern: {
        value: /[а-яА-Я- ёЁ]/,
        message: 'Допускаются только кириллические символы',
    },
    minLength: {
        value: 3,
        message: 'Фамилия должно состоять из 3-х и более букв',
    },
    maxLength: {
        value: 20,
        message: 'Превышен лимит по длине',
    },
};
