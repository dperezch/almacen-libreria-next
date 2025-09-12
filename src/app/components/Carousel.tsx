"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Arreglo para imágenes de escritorio
  const carouselImages = [
    "/anilladolarge.png",
    "/sombrerolarge.png",
    "/heladolarge.png",
    "/1large.png",
    "/2large.png",
    "/3large.png",
    "/4large.png",
    "/5large.png",
    "/6large.png",
  ];

  // Arreglo para imágenes de móvil con diseño diferente
  const carouselImagesSmall = [
    "/anilladosmall.png",
    "/sombrerosmall.png",
    "/heladosmall.png",
    "/1small.png",
    "/2small.png",
    "/3small.png",
    "/4small.png",
    "/5small.png",
    "/6small.png",
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
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/x8AAuMB8DtXNJsAAAAASUVORK5CYII="
              className="hidden md:block" // Oculto en móvil, visible en desktop
            />

            {/* Versión para pantallas pequeñas (mobile) */}
            <Image
              src={imageSmall}
              alt={`Slide ${index + 1} para móvil`}
              fill
              style={{ objectFit: "contain" }}
              priority={index === 0}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/x8AAuMB8DtXNJsAAAAASUVORK5CYII="
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
