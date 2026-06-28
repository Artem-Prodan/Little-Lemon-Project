import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="logo">Little Lemon</div>

        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Menu</a>
          <a href="#">Reservations</a>
          <a href="#">Order Online</a>
          <a href="#">Login</a>
        </nav>
      </div>
    </header>
  );
}