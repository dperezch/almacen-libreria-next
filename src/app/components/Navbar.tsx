"use client";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <nav className="bg-yellow-400 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-sky-900">
            <Image src="/familia.svg" width={150} height={100} alt="logo" />
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-sky-900 hover:text-sky-700">
              Home
            </a>
            <a href="#productos" className="text-sky-900 hover:text-sky-700">
              Productos
            </a>
            <a href="#servicios" className="text-sky-900 hover:text-sky-700">
              Servicios
            </a>
            <a href="#ubicacion" className="text-sky-900 hover:text-sky-700">
              Ubicación
            </a>
            <a href="#contacto" className="text-sky-900 hover:text-sky-700">
              Contacto
            </a>
          </div>
          <div className="flex items-center space-x-4">
            {/* <ShoppingCart className="text-sky-900" />
          <User className="text-sky-900" /> */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => {
                setMobile(!mobile);
              }}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>
      {mobile && (
        <div className=" w-full" id="navbar-hamburger">
          <ul className="flex flex-col font-medium rounded-lg bg-sky-100 ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-sky-900 rounded hover:bg-blue-700 hover:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#productos"
                className="block py-2 px-3 text-sky-900 rounded hover:bg-blue-700 hover:text-white"
              >
                Productos
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                className="block py-2 px-3 text-sky-900 rounded hover:bg-blue-700 hover:text-white"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#ubicacion"
                className="block py-2 px-3 text-sky-900 rounded hover:bg-blue-700 hover:text-white"
              >
                Ubicación
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="block py-2 px-3 text-sky-900 rounded hover:bg-blue-700 hover:text-white"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
