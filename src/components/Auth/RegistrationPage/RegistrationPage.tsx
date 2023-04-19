import { MainLayout } from 'components/shared/MainLayout/MainLayout';
import { Paths } from 'domain/Paths';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthSignupMutation } from 'store/api';

interface IFormState {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const RegistrationPage = () => {
    const [form, setForm] = useState<IFormState>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [signup, {}] = useAuthSignupMutation();

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
        });
    };

    return (
        <MainLayout>
            <div className="row container">
                <h5
                    className="row red lighten-2 white-text center fon"
                    style={{ marginTop: 30, padding: 10 }}
                >
                    Регистрация
                </h5>
                <form className="col s6 offset-s3" onSubmit={handleSubmit}>
                    <div className="row">
                        <input
                            placeholder="Имя"
                            id="first_name"
                            type="text"
                            className="validate"
                            value={form.firstName}
                            onChange={handleInputChange('firstName')}
                        />
                    </div>
                    <div className="row">
                        <input
                            placeholder="Фамилия"
                            id="last_name"
                            type="text"
                            className="validate"
                            value={form.lastName}
                            onChange={handleInputChange('lastName')}
                        />
                    </div>
                    <div className="row">
                        <input
                            placeholder="e-mail"
                            id="email"
                            type="email"
                            className="validate"
                            value={form.email}
                            onChange={handleInputChange('email')}
                        />
                    </div>
                    <div className="row">
                        <input
                            placeholder="Пароль"
                            id="password"
                            type="password"
                            className="validate"
                            value={form.password}
                            onChange={handleInputChange('password')}
                        />
                    </div>
                    <div className="row">
                        <div className="col s12 m5">
                            <button className="waves-effect waves-light btn center" type="submit">
                                Регистрация
                            </button>
                        </div>
                        <div className="col s12 m5 right">
                            <NavLink
                                to={Paths.authSignin}
                                className="waves-effect waves-light btn center"
                            >
                                Авторизация
                            </NavLink>
                        </div>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
};
