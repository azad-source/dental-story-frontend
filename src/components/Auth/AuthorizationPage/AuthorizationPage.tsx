import { MainLayout } from 'components/shared/MainLayout/MainLayout';
import { Paths } from 'domain/Paths';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthSigninMutation } from 'store/api';
import { login } from 'store/apiConfig';
import styles from './AuthorizationPage.module.scss';
import { Input } from 'components/shared/Input/Input';
import { Button } from 'components/shared/Button/Button';
import { Loader } from 'components/shared/Loader/Loader';
import { EMAIL_PLACEHOLDER, PASS_PLACEHOLDER } from 'variables';

interface IFormState {
    email: string;
    password: string;
}

export const AuthorizationPage = () => {
    const [form, setForm] = useState<IFormState>({
        email: '',
        password: '',
    });

    const [signin, { isLoading }] = useAuthSigninMutation();

    const navigate = useNavigate();

    const handleInputChange = (target: keyof IFormState) => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            setForm((p) => ({ ...p, [target]: e.target.value }));
        };
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signin({ email: form.email, password: form.password })
            .unwrap()
            .then((res) => {
                login({ accessToken: res.accessToken });
                navigate({ pathname: '/' });
            })
            .catch(() => {
                alert('Не удалось авторизоваться!');
            });
    };

    return (
        <MainLayout>
            <div className={styles.backplate}>
                <Loader className={styles.root} isLoading={isLoading}>
                    <div className={styles.title}>Авторизация</div>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <Input
                            placeholder={EMAIL_PLACEHOLDER}
                            value={form.email}
                            onChange={handleInputChange('email')}
                            type="email"
                        />
                        <Input
                            placeholder={PASS_PLACEHOLDER}
                            value={form.password}
                            onChange={handleInputChange('password')}
                            type="password"
                        />
                        <div className={styles.bottomPanel}>
                            <Button type="submit">Войти</Button>
                            <Button type="reset" to={Paths.authSignup} use="transparent">
                                Регистрация
                            </Button>
                        </div>
                    </form>
                </Loader>
            </div>
        </MainLayout>
    );
};
