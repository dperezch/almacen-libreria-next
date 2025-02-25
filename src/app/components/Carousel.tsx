"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowsSize";

const Carousel = () => {
  const size = useWindowSize();
  const esPantallaPequena = size.width !== undefined && size.width <= 768;
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    "/1large.png",
    "/2large.png",
    "/3large.png",
    "/4large.png",
    "/5large.png",
    "/6large.png",
  ];

  const carouselImagesSmall = [
    "/1small.png",
    "/2small.png",
    "/3small.png",
    "/4small.png",
    "/5small.png",
    "/6small.png",
  ];

  const getCarouselImages = () => {
    return esPantallaPequena ? carouselImagesSmall : carouselImages;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentSlide(slideIndex);
  };

  // Efecto para cambiar automáticamente las imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    // Limpiar el intervalo cuando el componente se desmonte para evitar fugas de memoria
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] overflow-hidden">
      {getCarouselImages().map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
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
      {/* Nuevos botones de navegación */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {getCarouselImages().map((_, index) => (
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
