import ProductCarousel, { type CarouselProduct } from "./ProductCarousel";

export default function Hero({ products }: { products: CarouselProduct[] }) {
  return (
    <section className="relative mx-auto mt-5 w-[98%]" aria-label="Productos destacados">
      <ProductCarousel products={products} />
    </section>
  );
}
