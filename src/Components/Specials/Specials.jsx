import "./Specials.css";
import { specialsDishes } from "../../data/specials";
import DishCard from "../DishCard/DishCard";

export default function Specials() {
  return (
    <section id="specials" className="specials">
      <div className="container">
        <div className="specials__header">
          <h2>This Month Specials</h2>
          <p>Limited-time dishes you won't find in our regular menu</p>
        </div>

        <div className="specials__grid">
          {specialsDishes.map((dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
              buttonText="Order Special"
              special
            />
          ))}
        </div>
      </div>
    </section>
  );
}