interface FriendCardProps {
    name: string; 
    quote: string;
    img: string;
}

function FriendCard ({ name, quote, img } : FriendCardProps) {
  return (
    <div className="card">
      <img src={img} alt={name} className='image'/>
      <h2>{name}</h2>
      <p>{quote}</p>
    </div>
  )
}

export default FriendCard;