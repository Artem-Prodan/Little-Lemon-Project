import { useState } from "react";
import "./Booking.css";
import { useLocation } from "react-router-dom";

export default function Booking() {

  const location = useLocation();
  //const from = location.state?.from;
  const dish = location.state?.dish;


  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: 1,
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function validate() {
    const newErrors = {};

    if (!form.date) newErrors.date = "Date is required";
    if (!form.time) newErrors.time = "Time is required";
    if (form.guests < 1) newErrors.guests = "At least 1 guest required";

    return newErrors;
  }

  const isFormValid = Object.keys(validate()).length === 0;

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    console.log("Booking submitted:", form);
    alert("Booking confirmed!");
  }

  return (
    <section className="booking">
      <div className="container">
        <h1>Book a table</h1>

        {dish && (
        <p className="booking__context">
          You are booking: <strong>{dish}</strong>
        </p>
      )}

        <form className="booking__form" onSubmit={handleSubmit}>
          <label>
            Date
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className={errors.date ? "input-error" : ""}
            />
            {errors.date && <span className="error">{errors.date}</span>}
          </label>

          <label>
            Time
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className={errors.time ? "input-error" : ""}
            />
            {errors.time && <span className="error">{errors.time}</span>}
          </label>

          <label>
            Guests
            <input
              type="number"
              name="guests"
              min="1"
              max="10"
              value={form.guests}
              onChange={handleChange}
              className={errors.guests ? "input-error" : ""}
            />
            {errors.guests && (
              <span className="error">{errors.guests}</span>
            )}
          </label>

          <button type="submit" disabled={!isFormValid}>
            Confirm
          </button>
        </form>
      </div>
    </section>
  );
}