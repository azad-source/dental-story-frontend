import { BreadcrumbProps } from 'components/shared/Breadcrumbs/Breadcrumbs';
import { Button } from 'components/shared/Button/Button';
import { Input } from 'components/shared/Input/Input';
import { Loader } from 'components/shared/Loader/Loader';
import { MainLayout } from 'components/shared/MainLayout/MainLayout';
import { Paths } from 'domain/Paths';
import { useState } from 'react';
import styles from './NewPatientPage.module.scss';
import {
    AGE_PLACEHOLDER,
    FIRST_NAME_PLACEHOLDER,
    LAST_NAME_PLACEHOLDER,
    MIDDLE_NAME_PLACEHOLDER,
} from 'variables';
import Select from 'react-select';
import { ActionMeta, SingleValue } from 'react-select';

interface IFormState {
    firstName: string;
    lastName: string;
    middleName?: string;
    age?: number;
    sex?: string;
    email?: string;
}

export const NewPatientPage = () => {
    const [form, setForm] = useState<IFormState>({
        firstName: '',
        lastName: '',
    });

    const breadcrumbs: BreadcrumbProps[] = [
        { caption: 'Пациенты', link: Paths.patients },
        { caption: '' },
    ];

    const handleInputChange = (target: keyof IFormState) => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            setForm((p) => ({ ...p, [target]: e.target.value }));
        };
    };

    const handleChangeSex = (
        newValue: SingleValue<{
            value: string;
            label: string;
        }>,
        actionMeta: ActionMeta<{
            value: string;
            label: string;
        }>,
    ) => {
        if (newValue?.value) {
            setForm((p) => ({ ...p, sex: newValue.value }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: вызов метода для добавления пациента
    };

    return (
        <MainLayout breadcrumbs={breadcrumbs} showBackButton>
            <div className={styles.backplate}>
                <Loader className={styles.root} isLoading={false}>
                    <div className={styles.title}>Добавление нового пациента</div>
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
                            placeholder={MIDDLE_NAME_PLACEHOLDER}
                            value={form.middleName || ''}
                            onChange={handleInputChange('middleName')}
                            type="text"
                        />
                        <Input
                            placeholder={AGE_PLACEHOLDER}
                            value={`${form.age}`}
                            onChange={handleInputChange('age')}
                            type="number"
                        />
                        <div className={styles.sex}>
                            <Select
                                options={[
                                    { value: 'woomen', label: 'Женский' },
                                    { value: 'men', label: 'Мужской' },
                                ]}
                                onChange={handleChangeSex}
                                className={styles.sex__select}
                                placeholder="Выберите пол"
                            />
                        </div>
                        <div className={styles.bottomPanel}>
                            <Button type="submit">Добавить</Button>
                        </div>
                    </form>
                </Loader>
            </div>
        </MainLayout>
    );
};
