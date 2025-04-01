import React from "react";
import type { Product } from "@/types/api/product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ModalProductProps {
  product: Product;
  closeModal: () => void;
}

const ModalProduct: React.FC<ModalProductProps> = ({ product, closeModal }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/5 backdrop-blur-sm"
      onClick={closeModal}>
      <div
        className="bg-white rounded-lg overflow-hidden w-[1000px] h-[600px] relative flex shadow-lg "
        onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-1 right-2 text-gray-600 hover:text-gray-800 text-2xl cursor-pointer"
          onClick={closeModal}>
          &times;
        </button>
        <div className="w-1/2 pr-2">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="w-full h-full">
            {Array(2)
              .fill(product.image)
              .flat()
              .map((img, index) => (
                <SwiperSlide key={index} className="w-full h-full">
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="px-auto cover"
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className="w-1/2 pl-2 flex flex-col justify-center p-4">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="font-bold text-2xl text-gray-700 mb-4">
            {new Intl.NumberFormat("es-CO", {
              style: "currency",
              currency: "COP",
            }).format(product.price)}
          </p>
          {/* Línea divisoria */}
          <hr className="mb-4" />
          {/* Sección de características */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Características</h3>
            <p className="text-gray-600">
              {product.description ? product.description : "Sin características definidas."}
            </p>
          </div>
          <div className="space-y-4">
            <button className="w-full px-4 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
              Agregar al carrito
            </button>
            <button className="w-full px-4 py-3 bg-gray-500 text-white rounded hover:bg-gray-600">
              Averiguar más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
