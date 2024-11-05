import { Button } from "@/components/ui/button";
import React from "react";
import Card from "./ui/Card";
import data from "../data/data.json";

const Services = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-sky-900 mb-6">
          Nuestros Servicios
        </h2>
        <p className="text-sky-800 mb-6">
          Ofrecemos una gama de servicios especializados para complementar nuestros productos.
          Desde la atención personalizada hasta la asistencia técnica,
          estamos aquí para asegurar su completa satisfacción en cada etapa.
        </p>

        <div className="flex justify-evenly flex-wrap">
          {data.cards.map((card, index) => (
            <Card
              key={index}
              pathImagen={card.pathImagen}
              title={card.title}
              subtitle={card.subtitle}
              text={card.text}
            />
          ))}
        </div>
        {/* <Button className="bg-sky-500 text-white hover:bg-sky-600">
          Learn More
        </Button> */}
      </div>
    </section>
  );
};

export default Services;
