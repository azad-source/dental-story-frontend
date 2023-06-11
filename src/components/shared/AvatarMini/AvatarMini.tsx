import styles from './AvatarMini.module.scss';

interface IProps {
    name: string;
    src?: string;
}

export const AvatarMini: React.FC<IProps> = ({ name, src }) => {
    const nameInitials = getNameInitials(name);

    return (
        <div className={styles.root} title={name}>
            {!!src ? (
                <div className={styles.root__avatar}>
                    <img src={src} alt={name} />
                </div>
            ) : (
                <div className={styles.root__initials}>{nameInitials}</div>
            )}
        </div>
    );
};

function getNameInitials(value: string) {
    const name = value.trim().toUpperCase();
    const nameArr = name.split(' ');
    let initials = nameArr.length > 1 ? `${nameArr[0][0]}${nameArr[1][0]}` : name[0];
    return initials;
}
