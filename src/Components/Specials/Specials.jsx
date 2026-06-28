import { Link } from "react-router-dom";
import "./Specials.css";

const dishes = [
  {
    id: 1,
    title: "Greek Salad",
    price: 12.99,
    description: "Fresh vegetables with feta cheese and olives.",
  },
  {
    id: 2,
    title: "Bruschetta",
    price: 9.99,
    description: "Grilled bread with tomatoes and basil.",
  },
  {
    id: 3,
    title: "Pasta Carbonara",
    price: 14.99,
    description: "Classic Italian pasta with creamy sauce.",
  },
];

export default function Specials() {
  return (
    <section className="specials">
      <div className="container">
        <div className="specials__header">
          <h2>This Week Specials</h2>
        </div>

        <div className="specials__grid">
          {dishes.map((dish) => (
            <div key={dish.id} className="card">
              <div className="card__content">
                <h3>{dish.title}</h3>
                <p className="card__desc">{dish.description}</p>
                <span className="card__price">${dish.price}</span>
              </div>

              <Link
                to="/booking"
                state={{ from: "specials", dish: dish.title }}
                className="card__btn"
              >
                Order
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}