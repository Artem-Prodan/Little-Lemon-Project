import "./Footer.css";
import logo from "../../assets/icons/logo2.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={logo} alt="LL" />
            <span>Little Lemon</span>
          </div>

          <p>Fresh Mediterranean cuisine</p>
        </div>

        <div className="footer__links">
          <a href="#menu">Menu</a>
          <a href="#specials">Specials</a>
          <a href="/reservation">Reservations</a>
        </div>

        <div className="footer__info">
          <p>© {new Date().getFullYear()} Little Lemon</p>
        </div>
      </div>
    </footer>
  );
}