import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
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
          <a href="#contacto" className="text-sky-900 hover:text-sky-700">
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
  );
};

export default Navbar;
