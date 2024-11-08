import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-sky-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-sky-200 mb-2 flex items-center">
              <Clock className="mr-2 text-sky-200" />
              Horario de atención
            </h3>
            <ul className="space-y-1 text-sky-200">
              <li>Lunes - Viernes: 9:00 AM - 2:00 PM / 4:30 PM - 9:00 PM</li>
              <li>Sábado, Domingo y Festivos: 9:00 AM - 2:00 PM</li>
            </ul>
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
          © 2024 Almacén y Librería La Familia. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
