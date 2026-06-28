import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Booking from "./pages/Booking";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Route>
    </Routes>
  );
}

export default App;