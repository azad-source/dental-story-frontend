import { MainLayout } from 'components/shared/MainLayout/MainLayout';
import { Paths } from 'domain/Paths';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthSignupMutation } from 'store/api';
import styles from './RegistrationPage.module.scss';
import { Input } from 'components/shared/Input/Input';
import { Button } from 'components/shared/Button/Button';
import {
    EMAIL_PLACEHOLDER,
    FIRST_NAME_PLACEHOLDER,
    LAST_NAME_PLACEHOLDER,
    PASS_PLACEHOLDER,
} from 'variables/fieldVariables';
import { delay } from 'store/apiConfig';
import { useForm } from 'react-hook-form';
import baseStyles from 'styles/base.module.scss';
import {
    EMAIL_VALIDATE,
    SIGNUP_FIRSTNAME_VALIDATE,
    SIGNUP_LASTNAME_VALIDATE,
    SIGNUP_PASSWORD_VALIDATE,
} from 'utils/validate';

interface IFormState {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const RegistrationPage = () => {
    const { register, handleSubmit, formState } = useForm<IFormState>();

    const { errors } = formState;

    const [responseError, setResponseError] = useState('');

    const [signup, { isLoading }] = useAuthSignupMutation();

    const navigate = useNavigate();

    const onSubmit = (data: IFormState) => {
        signup({
            email: data.email,
            password: data.password,
            username: `${data.lastName} ${data.firstName}`,
        })
            .unwrap()
            .then(() => {
                setResponseError('');
                delay(1000).then(() => {
                    navigate({ pathname: Paths.authSignin });
                });
            })
            .catch((err) => {
                setResponseError(err.message);
            });
    };

    return (
        <MainLayout isLoading={isLoading}>
            <div className={styles.backplate}>
                <div className={styles.root}>
                    <div className={styles.title}>Регистрация</div>
                    <form className={styles.form} noValidate onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            type="text"
                            placeholder={FIRST_NAME_PLACEHOLDER}
                            errors={errors.firstName}
                            required
                            register={register('firstName', SIGNUP_FIRSTNAME_VALIDATE)}
                        />
                        <Input
                            type="text"
                            placeholder={LAST_NAME_PLACEHOLDER}
                            errors={errors.lastName}
                            required
                            register={register('lastName', SIGNUP_LASTNAME_VALIDATE)}
                        />
                        <Input
                            type="email"
                            placeholder={EMAIL_PLACEHOLDER}
                            errors={errors.email}
                            required
                            register={register('email', EMAIL_VALIDATE)}
                        />
                        <Input
                            type="password"
                            placeholder={PASS_PLACEHOLDER}
                            errors={errors.password}
                            required
                            register={register('password', SIGNUP_PASSWORD_VALIDATE)}
                        />
                        {!!responseError && (
                            <div className={baseStyles.errors}>{responseError}</div>
                        )}
                        <div className={styles.bottomPanel}>
                            <Button type="submit">Регистрация</Button>
                            <Button type="reset" to={Paths.authSignin} use="transparent">
                                Авторизация
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
};
