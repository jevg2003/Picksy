import React from "react";
import { useState } from "react";
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
  imageLink,
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer p-4 h-96 flex flex-col"
        onClick={openModal}>
        {showId && <span className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 text-sm">{id}</span>}
        
        {/* Contenedor de imagen */}
        <div className="flex-1 mb-4 min-h-48 max-h-48 overflow-hidden">
          <img 
            src={imageLink} 
            alt={description} 
            className="w-full h-full object-contain bg-gray-100 dark:bg-gray-800 p-2 rounded" 
          />
        </div>

        {/* Información del producto */}
        <div className="flex flex-col flex-1">
          <h3 className="text-lg font-semibold dark:text-gray-200 mb-3">{name}</h3>
          <p className="text-gray-600 dark:text-gray-400 line-clamp-2 flex-grow-0 text-sm">
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
            name,
            description,
            images,
            price,
            category,
            stock,
            discount,
            characteristics,
            enabled,
            createdAt,
            updatedAt,
          }}
          closeModal={closeModal}
        />
      )}
    </>
  );
};