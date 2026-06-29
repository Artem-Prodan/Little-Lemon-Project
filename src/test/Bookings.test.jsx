import { render, screen } from "@testing-library/react";
import Bookings from "../pages/Bookings";
import { BrowserRouter } from "react-router-dom";

//Bookings empty state

test("shows empty state when no bookings", () => {
  localStorage.clear();

  render(
    <BrowserRouter>
      <Bookings />
    </BrowserRouter>
  );

  expect(screen.getByText(/no bookings yet/i)).toBeInTheDocument();
});