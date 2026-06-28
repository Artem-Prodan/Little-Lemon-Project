import "./Menu.css";
import { menuDishes } from "../../data/menu";
import DishCard from "../DishCard/DishCard";

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
            <DishCard
              key={dish.id}
              dish={dish}
              buttonText="Order"
            />
          ))}
        </div>
      </div>
    </section>
  );
}