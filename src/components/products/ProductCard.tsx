import React from "react";
import { useState } from "react";

import ModalProduct from "./ModalProduct";
import type { Product } from "@/types/api/product";

interface ProductCardProps extends Product {}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  image,
  price,
  category,
  isBlock,
  stock,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer p-6"
        onClick={openModal}>
        {/* Imagen del producto */}
        <img src={image} alt={description} className="w-full h-48 object-contain" />
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
          product={{ id, name, description, image, price, category, isBlock, stock }}
          closeModal={closeModal}
        />
      )}
    </>
  );
};
