import star from "../assets/star.png";

export default function Card(props) {
  return (
    <div className="card-element">
      <div className="available-tag">
        <p>SOLD OUT</p>
      </div>
      <img src={props.img} />
      <section className="card-info">
        <div>
          <img src={star} />
          <span>{props.rating}</span>
          <span>
            ({props.reviewCount}) • {props.country.toUpperCase()}
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
