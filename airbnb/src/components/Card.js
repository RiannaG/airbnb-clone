import star from "../assets/star.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpot === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  } else {
    badgeText = "";
  }

  return (
    <div className="card-element">
      {badgeText !== "" && <div className="card-badge">{badgeText}</div>}
      <img src={`../images/${props.coverImg}`} />
      <section className="card-info">
        <div>
          <img src={star} />
          <span>{props.stats.rating}</span>
          <span>
            ({props.stats.reviewCount}) • {props.location}
          </span>
        </div>
        <p>{props.title}</p>
        <p>
          <span>
            <strong>From ${props.price}</strong>
          </span>{" "}
          / person
        </p>
      </section>
    </div>
  );
}
