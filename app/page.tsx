import Header from "../src/components/Header";
import About from "../src/components/About";
import Price from "../src/components/Price";
import Contact from "../src/components/Contact";
import Gallery from "../src/components/Gallery";
import MyWorks from "../src/components/MyWorks";
import Reviews from "../src/components/Reviews";
import "../public/public.css";

export default function Home() {
  return (
    <main>
      <Header />
      <Gallery />
      <About />
      <Price />
      <MyWorks />
      <Reviews />
      <Contact />
    </main>
  );
}
