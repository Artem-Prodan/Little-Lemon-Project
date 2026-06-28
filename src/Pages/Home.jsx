import Hero from "../components/Hero/Hero";
import Specials from "../components/Specials/Specials";
import About from "../components/About/About";
import Menu from "../components/Menu/Menu";

export default function Home() {
  return (
    <>
        <Hero />
        <Specials />
        <Menu />
        <About />
    </>
  );
}