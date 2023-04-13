import { BreadcrumbProps } from 'components/shared/Breadcrumbs/Breadcrumbs';
import { MainLayout } from 'components/shared/MainLayout/MainLayout';
import { patientsPath } from 'domain/routes';
import { useState } from 'react';
import M from 'materialize-css';

interface IFormState {
    firstName: string;
    lastName: string;
    middleName?: string;
    age?: number;
    sex?: 'жен.' | 'муж.';
    email?: string;
}

export const NewPatientPage = () => {
    const [form, setForm] = useState<IFormState>({
        firstName: '',
        lastName: '',
    });

    const breadcrumbs: BreadcrumbProps[] = [
        { caption: 'Пациенты', link: patientsPath },
        { caption: '' },
    ];

    const handleInputChange = (target: keyof IFormState) => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            setForm((p) => ({ ...p, [target]: e.target.value }));
        };
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: вызов метода для добавления пациента
    };

    // document.addEventListener('DOMContentLoaded', function () {
    //     var elems = document.querySelectorAll('select');
    //     var instances = M.FormSelect.init(elems);
    // });

    return (
        <MainLayout breadcrumbs={breadcrumbs}>
            <h5>Добавление нового пациента</h5>

            <div className="row">
                <form className="col s4" onSubmit={handleSubmit}>
                    <div className="row">
                        <input
                            placeholder="Имя"
                            type="text"
                            value={form.firstName}
                            onChange={handleInputChange('firstName')}
                        />
                    </div>
                    <div className="row">
                        <input
                            placeholder="Фамилия"
                            type="text"
                            value={form.lastName}
                            onChange={handleInputChange('lastName')}
                        />
                    </div>
                    <div className="row">
                        <input
                            placeholder="Отчество"
                            type="text"
                            value={form.middleName || ''}
                            onChange={handleInputChange('middleName')}
                        />
                    </div>
                    <div className="row">
                        <input
                            placeholder="Возраст"
                            type="text"
                            value={form.age || ''}
                            onChange={handleInputChange('age')}
                        />
                    </div>
                    <div className="row">
                        <select>
                            <option value="1">Женский</option>
                            <option value="2">Мужской</option>
                        </select>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="waves-effect waves-light btn-large" type="submit">
                                Добавить
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
};
