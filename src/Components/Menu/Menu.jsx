import "./Menu.css";
import { Link } from "react-router-dom";
import { menuDishes } from "../../data/menu";

export default function Menu() {
  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="menu__header">
          <h2>Our Menu</h2>
          <p>Classic Mediterranean dishes</p>
        </div>

        <div className="menu__grid">
          {menuDishes.map((dish) => (
            <div key={dish.id} className="card">
              <div className="card__content">
                <h3>{dish.title}</h3>
                <p className="card__desc">{dish.description}</p>
                <span className="card__price">${dish.price}</span>
              </div>

              <Link
                to="/reservation"
                state={{ dish: dish.title }}
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