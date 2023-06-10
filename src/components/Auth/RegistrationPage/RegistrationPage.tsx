import { MainLayout } from 'components/shared/MainLayout/MainLayout';
import { Paths } from 'domain/Paths';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthSignupMutation } from 'store/api';
import styles from './RegistrationPage.module.scss';
import { Loader } from 'components/shared/Loader/Loader';
import { Input } from 'components/shared/Input/Input';
import { Button } from 'components/shared/Button/Button';
import {
    EMAIL_PLACEHOLDER,
    FIRST_NAME_PLACEHOLDER,
    LAST_NAME_PLACEHOLDER,
    PASS_PLACEHOLDER,
} from 'variables/fieldVariables';
import { delay } from 'store/apiConfig';

interface IFormState {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const defaultForm = { firstName: '', lastName: '', email: '', password: '' };

export const RegistrationPage = () => {
    const [form, setForm] = useState<IFormState>({ ...defaultForm });

    const [signup, { isLoading }] = useAuthSignupMutation();

    const navigate = useNavigate();

    const handleInputChange = (target: keyof IFormState) => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            setForm((p) => ({ ...p, [target]: e.target.value }));
        };
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signup({
            email: form.email,
            password: form.password,
            username: `${form.lastName} ${form.firstName}`,
        })
            .unwrap()
            .then(() => {
                setForm({ ...defaultForm });
                delay(1000).then(() => {
                    navigate({ pathname: Paths.authSignin });
                });
            });
    };

    return (
        <MainLayout>
            <div className={styles.backplate}>
                <Loader className={styles.root} isLoading={isLoading}>
                    <div className={styles.title}>Регистрация</div>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <Input
                            placeholder={FIRST_NAME_PLACEHOLDER}
                            value={form.firstName}
                            onChange={handleInputChange('firstName')}
                            type="text"
                        />
                        <Input
                            placeholder={LAST_NAME_PLACEHOLDER}
                            value={form.lastName}
                            onChange={handleInputChange('lastName')}
                            type="text"
                        />
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
                            <Button type="submit">Регистрация</Button>
                            <Button type="reset" to={Paths.authSignin} use="transparent">
                                Авторизация
                            </Button>
                        </div>
                    </form>
                </Loader>
            </div>
        </MainLayout>
    );
};
