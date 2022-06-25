import katie from "../assets/katie.png";
import star from "../assets/star.png";

export default function Card() {
  return (
    <div className="card-element">
      <div className="available-tag">
        <p>SOLD OUT</p>
      </div>
      <img src={katie} />
      <section className="card-info">
        <div>
          <img src={star} />
          <span>5.0</span>
          <span>(6) - USA</span>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <span>
            <strong>From $136</strong>
          </span>{" "}
          / person
        </p>
      </section>
    </div>
  );
}
