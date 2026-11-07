import React, { useEffect, useId, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { CatalogProduct } from "@/types/api/product";

interface ModalProductProps {
  product: CatalogProduct;
  isDemo: boolean;
  closeModal: () => void;
}

const ModalProduct: React.FC<ModalProductProps> = ({ product, isDemo, closeModal }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={closeModal}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
      className="m-auto max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-4xl overflow-y-auto rounded-xl bg-white text-gray-900 shadow-lg backdrop:bg-black/60 dark:bg-gray-800 dark:text-white">
      <div className="relative grid md:grid-cols-2">
        <button
          type="button"
          aria-label="Cerrar ficha"
          className="absolute right-3 top-3 z-10 grid size-9 cursor-pointer place-items-center rounded-full bg-white text-2xl text-gray-800 shadow dark:bg-gray-900 dark:text-white"
          onClick={() => dialogRef.current?.close()}>
          &times;
        </button>
        <div className="min-w-0 bg-gray-100 dark:bg-gray-700">
          {product.images.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="h-64 w-full md:h-96">
              {product.images.map((img, index) => (
                <SwiperSlide key={index} className="w-full h-full">
                  <img
                    src={img.link}
                    alt={`${product.name} ${index + 1}`}
                    className="h-full w-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="grid h-64 place-items-center text-sm text-gray-500">Sin imagen</div>
          )}
        </div>

        <div className="flex flex-col justify-center p-6">
          <h2 id={titleId} className="text-3xl font-bold mb-4">{product.name}</h2>
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
          {isDemo ? (
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Ficha de demostración. El producto y su precio son ilustrativos.
            </p>
          ) : (
            <div className="space-y-4">
              <button className="w-full px-4 py-3 bg-blue-500 dark:bg-blue-600 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-700">
                Agregar al carrito
              </button>
              <button className="w-full px-4 py-3 bg-gray-500 dark:bg-gray-600 text-white rounded hover:bg-gray-600 dark:hover:bg-gray-700">
                Averiguar más
              </button>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
};

export default ModalProduct;
