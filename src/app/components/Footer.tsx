import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-sky-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sky-200">
              We are a leading provider of quality products and services,
              committed to customer satisfaction and excellence in everything we
              do.
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
  );
};

export default Footer;
