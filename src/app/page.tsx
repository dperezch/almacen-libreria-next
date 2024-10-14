"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  ShoppingCart,
  User,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = ["/slide-1.png", "/slide-2.png"];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className="min-h-screen bg-sky-50">
      {/* Navbar */}
      <nav className="bg-yellow-400 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-sky-900">
            <Image src="/familia.svg" width={150} height={100} alt="logo" />
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-sky-900 hover:text-sky-700">
              Home
            </a>
            <a href="#" className="text-sky-900 hover:text-sky-700">
              Products
            </a>
            <a href="#" className="text-sky-900 hover:text-sky-700">
              Services
            </a>
            <a href="#" className="text-sky-900 hover:text-sky-700">
              About
            </a>
            <a href="#" className="text-sky-900 hover:text-sky-700">
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <ShoppingCart className="text-sky-900" />
            <User className="text-sky-900" />
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <div className="relative h-[400px] overflow-hidden">
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Information Sections */}
      <section className="py-12 bg-sky-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-900 mb-6">Our Products</h2>
          <p className="text-sky-800 mb-4">
            Discover our wide range of high-quality products designed to meet
            your every need. From cutting-edge electronics to stylish home
            decor, we have something for everyone.
          </p>
          <Button className="bg-yellow-400 text-sky-900 hover:bg-yellow-500">
            Shop Now
          </Button>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-900 mb-6">Our Services</h2>
          <p className="text-sky-800 mb-4">
            We offer a variety of professional services to complement our
            product range. From expert consultations to efficient delivery and
            installation, we're here to ensure your complete satisfaction.
          </p>
          <Button className="bg-sky-500 text-white hover:bg-sky-600">
            Learn More
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-sky-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-900 mb-6">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" />
                <Button className="bg-yellow-400 text-sky-900 hover:bg-yellow-500">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="text-sky-900" />
                <span className="text-sky-800">
                  123 Store Street, City, Country
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="text-sky-900" />
                <span className="text-sky-800">+1 234 567 8900</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-sky-900" />
                <span className="text-sky-800">info@yourstore.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sky-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-sky-200">
                We are a leading provider of quality products and services,
                committed to customer satisfaction and excellence in everything
                we do.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sky-200 hover:text-yellow-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sky-200 hover:text-yellow-400">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sky-200 hover:text-yellow-400">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sky-200 hover:text-yellow-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-sky-200 mb-2">
                Stay updated with our latest offers and news.
              </p>
              <form className="flex">
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="rounded-r-none"
                />
                <Button className="bg-yellow-400 text-sky-900 hover:bg-yellow-500 rounded-l-none">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-sky-800 text-center text-sky-200">
            © 2024 Your Store Name. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
