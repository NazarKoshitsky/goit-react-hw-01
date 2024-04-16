import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.cardList}>
      {friends.map((friend) => (
        <li key={friend.id} className={css.cardItem}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}