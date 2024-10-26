import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Products from "./components/Products";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
