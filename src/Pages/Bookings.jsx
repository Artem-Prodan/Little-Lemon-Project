import { useState } from "react";
import "./Bookings.css";
import { Link } from "react-router-dom";

export default function Bookings() {

  const [bookings, setBookings] = useState(() => {
  try {
    const saved = localStorage.getItem("bookings");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
});

  function handleDelete(id) {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  }

  if (bookings.length === 0) {
    return (
      <section className="bookings">
        <div className="container">
          <h1>Your bookings</h1>
          <div className="bookings__empty">
            <h2>No bookings yet</h2>
            <p>Start by reserving a table in our restaurant.</p>
            <Link to="/reservation" className="bookings__cta">
              Make a reservation
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bookings">
      <div className="container">
        <h1>Your bookings</h1>

        <div className="bookings__list">
          {bookings.map((b) => (
            <div key={b.id} className="bookings__card">
              <p>
                <strong>{b.date}</strong> at {b.time}
              </p>

              <p>Guests: {b.guests}</p>

              {b.dish && <p>Dish: {b.dish}</p>}

              <button onClick={() => handleDelete(b.id)}>
                Cancel
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}