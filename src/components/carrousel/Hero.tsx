"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/api/products";
import ProductCarousel, { type CarouselProduct } from "@/components/carrousel/ProductCarousel";

export default function Hero() {
  const [products, setProducts] = useState<CarouselProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await getProducts({ size: 3, order: "desc" });
        const lastThree = response.content.map((product) => ({
          id: product.id,
          name: product.name,
          price: product.price,
          img: product.images.find((img) => img.isCover)?.link || "/default-image.jpg",
        }));
        setProducts(lastThree);
      } catch (error) {
        console.error("Error loading products:", error);
      }finally {
        setIsLoading(false); // Actualiza el estado de carga
      }
    };

    loadProducts();
  }, []);

  return (
    <section className="mt-5 w-[98%] h-[500px] flex items-center justify-center relative">
      <div className="w-full h-[500px] relative">
      {!isLoading && ( // Renderizado condicional
          <ProductCarousel 
            products={products}
            key={products.length} // Fuerza reinicialización
          />
        )}
      </div>
    </section>
  );
}
