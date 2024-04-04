import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({
    avatar,
    name,
    isOnline
}) {
    const statusClass = clsx(
        css.status,
        isOnline ? css.statusOnline : css.statusOffline
    );
    return (
        <div className={css.card}>
            <img className={css.avatar} src={avatar} alt='Avatar' width='48'></img>
            <p className={css.name}>{name}</p>
            <p className={statusClass}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    );
}

