import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";

//Header navigation exists

test("renders navigation links", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  expect(screen.getByText(/home/i)).toBeInTheDocument();
  expect(screen.getByText(/menu/i)).toBeInTheDocument();
  expect(screen.getByText(/reservations/i)).toBeInTheDocument();
});