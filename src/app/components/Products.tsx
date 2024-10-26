import { Button } from "@/components/ui/button";
import React from "react";

const Products = () => {
  return (
    <section className="py-12 bg-sky-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-sky-900 mb-6">Our Products</h2>
        <p className="text-sky-800 mb-4">
          Discover our wide range of high-quality products designed to meet your
          every need. From cutting-edge electronics to stylish home decor, we
          have something for everyone.
        </p>
        <Button className="bg-yellow-400 text-sky-900 hover:bg-yellow-500">
          Shop Now
        </Button>
      </div>
    </section>
  );
};

export default Products;
