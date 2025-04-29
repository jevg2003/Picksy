import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ModalProduct from "./ModalProduct";
import type { Product } from "@/types/api/product";

interface ProductCardProps extends Product {
  imageLink: string;
  showId: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  description,
  price,
  images,
  name,
  category,
  stock,
  discount,
  characteristics,
  enabled,
  showId,
  createdAt,
  updatedAt,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const swiperRef = useRef<any>(null);
  const hasMultipleImages = images.length > 1;

  const handleSwipe = (direction: "prev" | "next") => {
    if (swiperRef.current) {
      direction === "next" 
        ? swiperRef.current.swiper.slideNext() 
        : swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer p-4 h-[420px] flex flex-col relative">
        {showId && (
          <span className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 text-sm z-10">
            {id}
          </span>
        )}

        {/* Contenedor de imágenes */}
        <div className="flex-1 mb-4 min-h-56 max-h-64 overflow-hidden relative group">
          {hasMultipleImages ? (
            <>
              <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, FreeMode]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                touchRatio={1.5}
                resistanceRatio={0.85}
                className="w-full h-full"
              >
                {[...images].reverse().map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img.link}
                      alt={`${name} ${index + 1}`}
                      className="w-full h-full object-contain p-1 rounded"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Botones de navegación (solo para múltiples imágenes) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSwipe("prev");
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 z-20 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSwipe("next");
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 z-20 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          ) : (
            // Mostrar imagen única sin Swiper
            <img
              src={images[0].link}
              alt={name}
              className="w-full h-full object-contain p-1 rounded"
            />
          )}
        </div>

        {/* Resto del contenido */}
        <div className="flex flex-col flex-1">
          <h3 className="text-lg font-semibold dark:text-gray-200 mb-2">{name}</h3>
          <p className="text-gray-600 dark:text-gray-400 line-clamp-2 flex-grow-0 mb-2 text-sm">
            {description || "Descripción no disponible"}
          </p>
          <p className="text-gray-600 dark:text-gray-300 font-bold mt-auto">
            {new Intl.NumberFormat("es-CO", {
              style: "currency",
              currency: "COP",
            }).format(price)}
          </p>
        </div>
      </div>

      {isModalOpen && (
        <ModalProduct
          product={{
            id,
            description,
            price,
            images,
            name,
            category,
            stock,
            discount,
            characteristics,
            enabled,
            createdAt,
            updatedAt,
          }}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};