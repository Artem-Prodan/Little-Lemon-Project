
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DishCard from "../components/DishCard/DishCard";

//DishCard button behavior

test("renders dish card button", () => {
  const dish = {
    id: 1,
    title: "Pizza",
    description: "Tasty",
    price: 10,
  };

  render(
    <BrowserRouter>
      <DishCard dish={dish} buttonText="Order" />
    </BrowserRouter>
  );

  expect(screen.getByText(/pizza/i)).toBeInTheDocument();
  expect(screen.getByText(/order/i)).toBeInTheDocument();
});