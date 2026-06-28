import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="logo">Little Lemon</div>

        <nav className="nav">
          <NavLink to="/" className="nav__link">
            Home
          </NavLink>

          <NavLink to="/" className="nav__link">
            About
          </NavLink>

          <NavLink to="/" className="nav__link">
            Menu
          </NavLink>

          <NavLink to="/booking" className="nav__link">
            Reservations
          </NavLink>

          <NavLink to="/" className="nav__link">
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
}