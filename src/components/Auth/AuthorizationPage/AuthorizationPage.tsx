import { MainLayout } from 'components/shared/MainLayout/MainLayout';
import { authRegistrationPath } from 'domain/routes';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface IFormState {
    email: string;
    password: string;
}

export const AuthorizationPage = () => {
    const [form, setForm] = useState<IFormState>({
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
                    Авторизация
                </h5>
                <form className="col s6 offset-s3" onSubmit={handleSubmit}>
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
                            placeholder="password"
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
                                Войти
                            </button>
                        </div>
                        <div className="col right">
                            <NavLink
                                to={authRegistrationPath}
                                className="waves-effect waves-light btn-large"
                            >
                                Регистрация
                            </NavLink>
                        </div>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
};