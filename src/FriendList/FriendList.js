import PropTypes from "prop-types";
import s from '../FriendList/FriendList.module.css'

const FriendList = ({friends}) => {
    return (
        <ul className={s.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <li key={id}
                    className={s.item}>
                    <span className={isOnline ? s.Online : s.Offline}>

                    </span>
                    <img className={s.avatar} src={avatar} alt="" width='48' />
                    <p className={s.name}>{name}</p>
                </li>
           ))}
  
</ul>
    )
    
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool,
            id:PropTypes.number.isRequired,
        })
    )
}

export default FriendList;