import css from './Profile.module.css';

export default function Profile({
    name,
    tag,
    location,
    image,
    stats: { followers, views, likes },
}) {
    return (
    <div className={css.profileBox}>
      <div className={css.date}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.descr}>@{tag}</p>
        <p className={css.descr}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.itemTitle}>Followers</span>
          <span className={css.itemAmount}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemTitle}>Views</span>
          <span className={css.itemAmount}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemTitle}>Likes</span>
          <span className={css.itemAmount}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

