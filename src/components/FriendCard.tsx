import styles from "./FriendCard.module.css";
import { ThumbsUp } from "lucide-react";
import { useState } from "react";

interface FriendCardProps {
    name: string; 
    quote: string;
    img: string;
}

function FriendCard ({ name, quote, img } : FriendCardProps) {

  const [likes, setLikes] = useState<number>(0);

  const handleImageClick = () => {
    alert(`${name} says ${quote}`);
  }

  const handleLikeBtn = () => {
    setLikes(prevLikes => prevLikes + 1);
  }

  return (
    <div className={styles.card}>
      <img src={img} alt={name} className={styles.image} onClick={handleImageClick} />
      <h2>{name}</h2>
      <p>{quote}</p>
      <div className={styles.likes}>
        <ThumbsUp style={{cursor: "pointer"}} onClick={handleLikeBtn}/>
        <span>{likes}</span>
      </div>
    </div>
  )
}

export default FriendCard;