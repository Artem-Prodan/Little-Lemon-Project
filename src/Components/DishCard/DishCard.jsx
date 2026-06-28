import { Link } from "react-router-dom";
import "./DishCard.css";

export default function DishCard({
  dish,
  buttonText = "Order",
  special = false,
}) {
  return (
    <div className={`card ${special ? "card--special" : ""}`}>
      <div className="card__image">
        <img src={dish.image} alt={dish.title} />
      </div>

      <div className="card__content">
        <h3>{dish.title}</h3>

        <p className="card__desc">
          {dish.description}
        </p>

        <span className="card__price">
          ${dish.price}
        </span>
      </div>

      <Link
        to="/reservation"
        state={{ dish: dish.title }}
        className="card__btn"
      >
        {buttonText}
      </Link>
    </div>
  );
}