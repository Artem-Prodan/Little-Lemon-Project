
import { render, screen } from "@testing-library/react";
import Menu from "../components/Menu/Menu";
import { BrowserRouter } from "react-router-dom";

//Menu renders dishes

test("renders menu items", () => {
  render(
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  );

  expect(screen.getByText(/our menu/i)).toBeInTheDocument();
});