import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Products from "./components/Products";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Location from "./components/Location";

export default function Home() {
  return (
    <div className="min-h-screen bg-sky-50">
      {/* Navbar */}
      <Navbar />

      {/* Carousel */}
      <Carousel />

      {/* Information Sections */}
      <Products />
      <Services />

      {/* Location Section */}
      <Location />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
