import { render, screen } from "@testing-library/react";
import Reservation from "../pages/Reservation";
import { BrowserRouter } from "react-router-dom";

//reservation form render test

test("renders reservation form", () => {
  render(
    <BrowserRouter>
      <Reservation />
    </BrowserRouter>
  );

  expect(screen.getByText(/book a table/i)).toBeInTheDocument();
});