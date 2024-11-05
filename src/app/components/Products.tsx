import { Button } from "@/components/ui/button";
import React from "react";

const Products = () => {
  return (
    <section className="py-12 bg-sky-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-sky-900 mb-6">Nuestros productos</h2>
        <p className="text-sky-800 mb-4">
          Descubra nuestra variada selección de productos esenciales y de
          calidad diseñados para satisfacer todas sus necesidades diarias.
          Desde frescos alimentos, panes y huevos hasta deliciosos fiambres,
          golosinas, helados y bebidas, tenemos todo lo que necesita.
          También ofrecemos una amplia gama de abarrotes, artículos de librería
          y productos congelados para que siempre esté bien abastecido.
        </p>
        {/* <Button className="bg-yellow-400 text-sky-900 hover:bg-yellow-500">
          Shop Now
        </Button> */}
      </div>
    </section>
  );
};

export default Products;
