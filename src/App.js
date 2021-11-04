import Profile from "./Profile/Profile";
import Statistics from './Statistics/Statistics'
import FriendList from './FriendList/FriendList'


import user from './Profile/user.json';
import statisticalData from './Statistics/statistical-data.json';
import friends from './FriendList/friend.json'



const  App = () => {
  return (
    <>
    <Profile
      name={user.name}
      tag={user.tag}
       location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

      
        <Statistics title="Upload stats" stats={statisticalData} />
       <FriendList friends={friends} />
        </>
    
  );
}

export default App;
