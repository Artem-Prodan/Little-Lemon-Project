import { Outlet } from "react-router-dom";

import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";

function MainLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;