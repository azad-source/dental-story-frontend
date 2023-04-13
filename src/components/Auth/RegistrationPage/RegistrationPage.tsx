import { MainLayout } from 'components/shared/MainLayout/MainLayout';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { authLoginPath } from 'domain/routes';

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

    const handleInputChange = (target: keyof IFormState) => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            setForm((p) => ({ ...p, [target]: e.target.value }));
        };
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: вызов метода для регистрации
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
                        <div className="col">
                            <button className="waves-effect waves-light btn-large" type="submit">
                                Создать
                            </button>
                        </div>
                        <div className="col right">
                            <NavLink
                                to={authLoginPath}
                                className="waves-effect waves-light btn-large"
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
