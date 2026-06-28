import { Link } from "react-router-dom";

import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1>Little Lemon</h1>
          <p>We are a family owned Mediterranean restaurant.</p>

          <Link to="/reservation" className="hero__button">
            Reserve a table
          </Link>
        </div>
      </div>
    </section>
  );
}