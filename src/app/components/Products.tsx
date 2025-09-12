import Image from "next/image";
import logos from "../data/logos.json";

const Products = () => {
  return (
    <section className="py-12 bg-sky-100" id="productos">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-sky-900 mb-6">
          Nuestros productos
        </h2>
        <p className="text-sky-800 mb-4">
          En <strong>Almacén y Librería La Familia</strong> descubra nuestra
          variada selección de productos esenciales y de calidad diseñados para
          satisfacer todas sus necesidades diarias. Desde frescos alimentos,
          panes y huevos hasta deliciosos fiambres, golosinas, helados y
          bebidas, tenemos todo lo que necesita. También ofrecemos una amplia
          gama de abarrotes, artículos de librería y productos congelados para
          que siempre esté bien abastecido.
        </p>
        <div className="hidden md:flex flex-row justify-evenly mt-6">
          {logos.logos.map((logo, index) => (
            <div
              key={index}
              className="relative w-20 h-20 rounded-full overflow-hidden"
            >
              <Image
                src={logo.url}
                alt={`logo ${logo.name}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "contain" }}
                className="p-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
