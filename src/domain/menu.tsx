import { CalendarIcon } from 'components/shared/icons/CalendarIcon';
import { Paths } from './Paths';
import { PeopleIcon } from 'components/shared/icons/PeopleIcon';
import { DentistIcon } from 'components/shared/icons/DentistIcon';
import { ReportIcon } from 'components/shared/icons/ReportIcon';

export type MenuItemType = {
    caption: string;
    link: string;
    icon?: React.ReactNode;
    subItems?: MenuItemType[];
    handler?: () => void;
};

export const MENU_ITEMS: MenuItemType[] = [
    { caption: 'Расписание', link: Paths.schedule, icon: <CalendarIcon /> },
    { caption: 'Пациенты', link: Paths.patients, icon: <PeopleIcon /> },
    {
        caption: 'Врачебная часть',
        link: Paths.patients,
        icon: <DentistIcon />,
        subItems: [
            { caption: 'Первичный осмотр', link: Paths.primaryInspection },
            { caption: 'История болезни', link: Paths.diseaseHistory },
            { caption: 'Лабораторные работы', link: Paths.laboratoryWorks },
        ],
    },
    { caption: 'Отчёты', link: Paths.reports, icon: <ReportIcon /> },
];
