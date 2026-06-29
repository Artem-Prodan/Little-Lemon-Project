import { BrowserRouter } from "react-router-dom";

export function renderWithRouter(ui) {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
}