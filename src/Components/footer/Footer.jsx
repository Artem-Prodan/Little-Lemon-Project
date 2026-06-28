import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <h3>Little Lemon</h3>
          <p>Fresh Mediterranean cuisine</p>
        </div>

        <div className="footer__links">
          <a href="/">Home</a>
          <a href="/booking">Reservations</a>
          <a href="/">Menu</a>
        </div>

        <div className="footer__info">
          <p>© {new Date().getFullYear()} Little Lemon</p>
        </div>
      </div>
    </footer>
  );
}