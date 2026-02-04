import styles from "./FriendCard.module.css";

interface FriendCardProps {
    name: string; 
    quote: string;
    img: string;
}

function FriendCard ({ name, quote, img } : FriendCardProps) {
  return (
    <div className={styles.card}>
      <img src={img} alt={name} className={styles.image} />
      <h2>{name}</h2>
      {/* CSS in JS */}
      <p style={{ color: "red" }}>{quote}</p>
    </div>
  );
}

export default FriendCard;