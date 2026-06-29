#  Little Lemon Restaurant

A modern, responsive restaurant website built with **React + Vite** that allows users to browse the menu, reserve tables, and manage their bookings. The project focuses on creating an intuitive reservation experience with client-side validation, persistent booking storage, and reusable React components.

##  Features

-  Responsive landing page
-  Browse restaurant menu and monthly specials
-  Table reservation form
-  Form validation
-  Guest selection
-  Live reservation summary
-  Bookings stored in Local Storage
-  View all saved bookings
-  Cancel existing bookings
-  React Router navigation
-  Unit tests using React Testing Library

---

##  Pages

- Home
- Reservation
- My Bookings

---

##  Built With

- React
- React Router
- JavaScript (ES6+)
- CSS3
- Local Storage API
- React Testing Library
- Jest

---

##  Project Structure

```
src/
│
├── assets/
│
├── components/
│   ├── About/
│   ├── DishCard/
│   ├── Footer/
│   ├── Header/
│   ├── Hero/
│   ├── Menu/
│   └── Specials/
│
├── data/
│
├── layout/
│
├── pages/
│   ├── Home.jsx
│   ├── Reservation.jsx
│   └── Bookings.jsx
│
├── tests/
│
├── App.jsx
└── main.jsx
```

---

##  Getting Started

### Clone the repository

```bash
git clone https://github.com/Artem-Prodan/Little-Lemon-Project.git
```

### Navigate into the project

```bash
cd Little_Lemon
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

##  Running Tests

Run all tests with:

```bash
npm test
```

The project includes tests for:

- Header navigation
- Menu rendering
- Reservation page
- Dish card rendering
- Empty bookings state

---

##  Reservation Flow

1. Browse the menu or specials.
2. Click **Order** or **Reserve a table**.
3. Select:
   - Date
   - Time
   - Number of guests
4. Submit the reservation.
5. Booking is saved in Local Storage.
6. View or cancel bookings from the **My Bookings** page.

---

##  Form Validation

The reservation form validates:

- Date is required
- Past dates cannot be selected
- Time must be selected
- At least one guest is required

The submit button remains disabled until the form is valid.

---

##  Data Persistence

Reservations are stored in the browser using **Local Storage**, allowing bookings to remain available after refreshing the page.

Each booking contains:

- Reservation date
- Reservation time
- Number of guests
- Selected dish (optional)
- Unique booking ID

---

##  Design

The project uses a clean component-based architecture with reusable UI elements, including:

- Header
- Hero section
- Menu cards
- Specials section
- About section
- Responsive navigation
- Footer

CSS custom properties (variables) are used for consistent colors, spacing, shadows, and typography.

---

##  Future Improvements

- User authentication
- Backend database integration
- Reservation editing
- Email confirmations
- Available time slots from an API
- Dark mode
- Accessibility improvements

---

##  Author

Prodan Artem

Web and Mobile application development

VIZJA University in Warsaw

---
