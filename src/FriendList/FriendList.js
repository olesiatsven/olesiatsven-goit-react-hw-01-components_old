import s from '../FriendList/FriendList.module.css'

const FriendList = (friends) => {
    return (
        <ul className={s.friendList}>
            <li className={s.item}>
                <span className={s.status}></span>
                <img className={s.avatar} src="" alt="" width="48" />
                <p className={s.name}></p>
</li>
  
</ul>
    )
    
}
export default FriendList;