// ModalProduct.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Product } from "@/types/api/product";

interface ModalProductProps {
  product: Product;
  closeModal: () => void;
}

const ModalProduct: React.FC<ModalProductProps> = ({ product, closeModal }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-white/5 backdrop-blur-sm"
      onClick={closeModal}>
      <div
        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden w-[1000px] h-[600px] relative flex shadow-lg"
        onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-1 right-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 text-2xl cursor-pointer"
          onClick={closeModal}>
          &times;
        </button>
        <div className="w-1/2 pr-2">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="w-full h-full bg-gray-100 dark:bg-gray-700">
            {product.images.map((img, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <img
                  src={img.link}
                  alt={`${product.name} ${index + 1}`}
                  className="px-auto cover object-contain bg-white dark:bg-gray-600"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-1/2 pl-2 flex flex-col justify-center p-4">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">{product.name}</h2>
          <p className="font-bold text-2xl text-gray-700 dark:text-gray-300 mb-4">
            {new Intl.NumberFormat("es-CO", {
              style: "currency",
              currency: "COP",
            }).format(product.price)}
          </p>
          <hr className="mb-4 border-gray-200 dark:border-gray-600" />
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 dark:text-gray-200">Características</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {product.description ? product.description : "Sin características definidas."}
            </p>
          </div>
          <div className="space-y-4">
            <button className="w-full px-4 py-3 bg-blue-500 dark:bg-blue-600 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-700">
              Agregar al carrito
            </button>
            <button className="w-full px-4 py-3 bg-gray-500 dark:bg-gray-600 text-white rounded hover:bg-gray-600 dark:hover:bg-gray-700">
              Averiguar más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;