import { useState } from "react";
import FriendCard from "./FriendCard";
import styles from "./FriendsList.module.css";

const friends = [
  { name: "Rachel", quote: "No uterus, no opinion!", img: "https://static.wikia.nocookie.net/friends/images/f/f7/Rachel_Greene.jpg" },
  { name: "Ross", quote: "We were on a break!", img: "https://static.wikia.nocookie.net/friends/images/0/0b/RossGeller.jpg" },
  { name: "Monica", quote: "Welcome to the real world, it sucks!", img: "https://static.wikia.nocookie.net/friends/images/2/2f/Monica_Geller-Bing_Season_10.png" },
  { name: "Chandler", quote: "Could I BE wearing any more clothes?", img: "https://static.wikia.nocookie.net/friends/images/1/10/10chandler.png" },
  { name: "Joey", quote: "How you doin'?", img: "https://static.wikia.nocookie.net/friends/images/4/43/10joey.png" },
  { name: "Phoebe", quote: "Smelly cat, smelly cat, what are they feeding you?", img: "https://static.wikia.nocookie.net/friends/images/5/57/10phoebe.png" }
];

function FriendsList() {

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [likes, setLikes] = useState<{ [key: string]: number }>({});

  const handleInputChange : React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
    setSearchQuery(event.target.value);
  }

  const handleLike = (name: string) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [name]: (prevLikes[name] || 0) + 1,
    }));
  };

  return (
    <>
      <input onChange={handleInputChange} value={searchQuery} className={styles.searchFriends} type="text" id="search" placeholder="Search friends..."></input>
      <p>{searchQuery && `Searching for '${searchQuery}'`}</p>
      <div id="friends-list" className={styles.list}>
        {friends.filter(k => k.name.toLowerCase().includes(searchQuery.toLowerCase())).map((friend) => {
          return (
            <FriendCard key={friend.name} name={friend.name} quote={friend.quote} img={friend.img} likes={likes[friend.name] || 0} onLike={() => handleLike(friend.name)} />
          )
        })}
      </div>
    </>
  )
}

export default FriendsList;