"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/api/products";
import ProductCarousel, { type CarouselProduct } from "@/components/ProductCarousel";

export default function Hero() {
  const [products, setProducts] = useState<CarouselProduct[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await getProducts({ size: 100 });
        const lastThree = response.content.slice(-3).map((product) => ({
          id: product.id,
          name: product.name,
          price: product.price,
          img: product.images.find((img) => img.isCover)?.link || "/default-image.jpg",
        }));
        setProducts(lastThree);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    };

    loadProducts();
  }, []);

  return (
    <section className="mt-5 w-[98%] h-[500px] flex items-center justify-center relative">
      <div className="w-full h-[500px] relative">
        <ProductCarousel products={products} />
      </div>
    </section>
  );
}
