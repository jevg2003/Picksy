import React, { useState } from 'react';
import Feature from './Feature'; // Asegúrate de que la ruta es correcta

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: 'Producto 1', price: '$100', img: './IMG/aguacate.jpg', images: ['./IMG/aguacate.jpg', './IMG/aguacate2.jpg'] },
    { id: 2, name: 'Producto 2', price: '$150', img: './IMG/aguacate.jpg', images: ['./IMG/aguacate.jpg', './IMG/aguacate2.jpg'] },
    { id: 3, name: 'Producto 3', price: '$200', img: './IMG/aguacate.jpg', images: ['./IMG/aguacate.jpg', './IMG/aguacate2.jpg'] },
    { id: 4, name: 'Producto 4', price: '$250', img: './IMG/aguacate.jpg', images: ['./IMG/aguacate.jpg', './IMG/aguacate2.jpg'] },
    { id: 5, name: 'Producto 5', price: '$100', img: './IMG/aguacate.jpg', images: ['./IMG/aguacate.jpg', './IMG/aguacate2.jpg'] },
    { id: 6, name: 'Producto 6', price: '$100', img: './IMG/aguacate.jpg', images: ['./IMG/aguacate.jpg', './IMG/aguacate2.jpg'] },
    { id: 7, name: 'Producto 7', price: '$150', img: './IMG/aguacate.jpg', images: ['./IMG/aguacate.jpg', './IMG/aguacate2.jpg'] },
    { id: 8, name: 'Producto 8', price: '$150', img: './IMG/aguacate.jpg', images: ['./IMG/aguacate.jpg', './IMG/aguacate2.jpg'] },
    { id: 9, name: 'Producto 9', price: '$150', img: './IMG/aguacate.jpg', images: ['./IMG/aguacate.jpg', './IMG/aguacate2.jpg'] },
    { id: 10, name: 'Producto 10', price: '$150', img: './IMG/aguacate.jpg', images: ['./IMG/aguacate.jpg', './IMG/aguacate2.jpg'] },
    { id: 11, name: 'Producto 11', price: '$150', img: './IMG/aguacate.jpg', images: ['./IMG/aguacate.jpg', './IMG/aguacate2.jpg'] },
    { id: 12, name: 'Producto 12', price: '$150', img: './IMG/aguacate.jpg', images: ['./IMG/aguacate.jpg', './IMG/aguacate2.jpg'] },
  ];

  return (
    <section className="py-10 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        {/* Título con línea inferior */}
        <h2 className="text-6xl text-start mb-20">Productos</h2>
        
        {/* Grid de productos: 4 columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Imagen del producto */}
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              {/* Recuadro blanco con información */}
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal del producto, se muestra si hay un producto seleccionado */}
      {selectedProduct && (
        <Feature 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
