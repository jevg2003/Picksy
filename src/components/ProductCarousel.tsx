"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface CarouselProduct {
  id: number;
  name: string;
  price: number;
  img: string;
}

interface ProductCarouselProps {
  products: CarouselProduct[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  return (
    <div className="w-full h-[500px] relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="rounded-lg shadow-lg h-[500px]">
        {products.map((product) => (
          <SwiperSlide key={product.id} className="relative h-[500px]">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-contain rounded-lg"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute bottom-0 right-0 m-4 p-6 bg-black/70 rounded-lg w-70 h-40 flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold text-white">{product.name}</h3>
              <p className="text-white mt-2">Precio: ${product.price.toFixed(2)}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Saber más
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botones de navegación */}
      <button
        className="custom-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-blue-300 hover:bg-black/80 cursor-pointer transition-colors"
        aria-label="Anterior">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        className="custom-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-blue-300 hover:bg-black/80 cursor-pointer transition-colors"
        aria-label="Siguiente">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
