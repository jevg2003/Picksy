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
        className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer p-6"
        onClick={openModal}>
        {showId && <span className="absolute top-2 right-2 text-gray-500 text-sm">{id}</span>}
        {/* Imagen del producto */}
        <img src={imageLink} alt={description} className="w-full h-48 object-contain" />
        {/* Información del producto */}
        <div className="p-4 bg-white">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-600">{description}</p>
          <p className="text-gray-600 font-bold">
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
