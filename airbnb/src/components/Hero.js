import imgrid from "../assets/img-grid.png";

export default function Hero() {
  return (
    <section>
      <img className="collection-photos" src={imgrid} />
      <div className="hero-text-cont">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
