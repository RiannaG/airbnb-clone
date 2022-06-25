import logo from "../assets/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} />
      </div>
    </nav>
  );
}
