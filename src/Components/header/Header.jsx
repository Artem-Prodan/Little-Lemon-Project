import "./Header.css";
import logo from "../../assets/icons/logo1.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">

        <Link to="/" className="logo">
          <img src={logo} alt="Little Lemon" />
        </Link>

        <nav className="nav">
          <a href="/" className="nav__link">
            Home
          </a>

          <a href="#about" className="nav__link">
            About
          </a>

          <a href="#menu" className="nav__link">
            Menu
          </a>

          <a href="/reservation" className="nav__link">
            Reservations
          </a>

          <a href="/bookings" className="nav__link">
            My Bookings
          </a>

          <a href="/" className="nav__link">
            Login
          </a>
        </nav>
      </div>
    </header>
  );
}