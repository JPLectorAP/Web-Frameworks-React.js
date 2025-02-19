import styles from "./FriendCard.module.css";

interface FriendCardProps {
    name: string; 
    quote: string;
    img: string;
}

function FriendCard ({ name, quote, img } : FriendCardProps) {

  const handleClick = () => {
    alert(`${name} says: ${quote}`);
  }

  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={img} alt={name} className={styles.image} />
      <h2>{name}</h2>
      <p>{quote}</p>
    </div>
  )
}

export default FriendCard;