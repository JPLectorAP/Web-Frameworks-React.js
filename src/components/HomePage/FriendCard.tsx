import styles from "./FriendCard.module.css";
import { ThumbsUp } from "lucide-react";

interface FriendCardProps {
    name: string; 
    quote: string;
    img: string;
    likes: number;
    onLike: () => void;
}

function FriendCard ({ name, quote, img, likes, onLike } : FriendCardProps) {

  const handleImageClick = () => {
    alert(`${name} says ${quote}`);
  }

  return (
    <div className={styles.card}>
      <img src={img} alt={name} className={styles.image} onClick={handleImageClick} />
      <h2>{name}</h2>
      <p>{quote}</p>
      <div className={styles.likes}>
        <ThumbsUp style={{cursor: "pointer"}} onClick={onLike}/>
        <span>{likes}</span>
      </div>
    </div>
  )
}

export default FriendCard;