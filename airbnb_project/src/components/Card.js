export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  } else {
    badgeText = "TAKE A PLANE FUCKER";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={`./images/${props.coverImg}`}
        className="card--image"
        alt="card--image"
      />
      <div className="card--stats">
        <img
          src="./images/staricon.png"
          className="card--star"
          alt="star--icon"
        />
        <span>{props.stats.rating}</span>
        <span className="gray"> ({props.stats.reviewCount}) ●● </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> per person
      </p>
    </div>
  );
}
