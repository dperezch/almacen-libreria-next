"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Arreglo para imágenes de escritorio
  const carouselImages = [
    "/anilladolarge.webp",
    "/sombrerolarge.webp",
    "/heladolarge.webp",
    "/1large.webp",
    "/2large.webp",
    "/3large.webp",
    "/4large.webp",
    "/5large.webp",
    "/6large.webp",
  ];

  // Arreglo para imágenes de móvil con diseño diferente
  const carouselImagesSmall = [
    "/anilladosmall.webp",
    "/sombrerosmall.webp",
    "/heladosmall.webp",
    "/1small.webp",
    "/2small.webp",
    "/3small.webp",
    "/4small.webp",
    "/5small.webp",
    "/6small.webp",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] overflow-hidden">
      {carouselImages.map((imageLarge, index) => {
        const imageSmall = carouselImagesSmall[index];

        return (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Versión para pantallas grandes (desktop) */}
            <Image
              src={imageLarge}
              alt={`Slide ${index + 1} para escritorio`}
              fill
              style={{ objectFit: "contain" }}
              priority={index === 0}
              /* placeholder="blur" */
              className="hidden md:block" // Oculto en móvil, visible en desktop
            />

            {/* Versión para pantallas pequeñas (mobile) */}
            <Image
              src={imageSmall}
              alt={`Slide ${index + 1} para móvil`}
              fill
              style={{ objectFit: "contain" }}
              priority={index === 0}
              /* placeholder="blur" */
              className="block md:hidden" // Visible en móvil, oculto en desktop
            />
          </div>
        );
      })}

      {/* --- Controles de Navegación --- */}
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* --- Puntos de Navegación --- */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`rounded-full w-3 h-3 transition-colors duration-300 ${
              index === currentSlide
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
