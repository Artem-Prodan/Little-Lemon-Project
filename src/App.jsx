import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Bookings from "./pages/Bookings";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/bookings" element={<Bookings />} />
      </Route>
    </Routes>
  );
}

export default App;