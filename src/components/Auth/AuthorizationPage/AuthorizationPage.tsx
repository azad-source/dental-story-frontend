import { MainLayout } from 'components/shared/MainLayout/MainLayout';
import { Paths } from 'domain/Paths';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthSigninMutation } from 'store/api';
import { login } from 'store/apiConfig';
import styles from './AuthorizationPage.module.scss';
import { Input } from 'components/shared/Input/Input';
import { Button } from 'components/shared/Button/Button';
import { EMAIL_PLACEHOLDER, PASS_PLACEHOLDER } from 'variables/fieldVariables';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { EMAIL_VALIDATE, SIGNIN_PASSWORD_VALIDATE } from 'utils/validate';
import baseStyles from 'styles/base.module.scss';

interface IFormState {
    email: string;
    password: string;
}

export const AuthorizationPage = () => {
    const { register, handleSubmit, formState, control } = useForm<IFormState>();

    const { errors } = formState;

    const [responseError, setResponseError] = useState('');

    const [signin, { isLoading }] = useAuthSigninMutation();

    const navigate = useNavigate();

    const onSubmit = (data: IFormState) => {
        signin(data)
            .unwrap()
            .then((res) => {
                setResponseError('');
                login({ accessToken: res.accessToken });
                navigate({ pathname: '/' });
            })
            .catch((err) => {
                setResponseError(err.message);
            });
    };

    return (
        <MainLayout isLoading={isLoading}>
            <div className={styles.backplate}>
                <div className={styles.root}>
                    <div className={styles.title}>Авторизация</div>
                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
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
                            register={register('password', SIGNIN_PASSWORD_VALIDATE)}
                        />
                        {!!responseError && (
                            <div className={baseStyles.errors}>{responseError}</div>
                        )}
                        <div className={styles.bottomPanel}>
                            <Button type="submit">Войти</Button>
                            <Button type="reset" to={Paths.authSignup} use="transparent">
                                Регистрация
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            <DevTool control={control} />
        </MainLayout>
    );
};
