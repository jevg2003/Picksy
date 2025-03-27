import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Feature({ product, onClose }) {
  // Deshabilitar el scroll de la página mientras el modal está abierto
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Detectar clics fuera del modal para cerrarlo
  const modalRef = useRef(null);
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/5 backdrop-blur-sm">
      <div ref={modalRef} className="bg-white rounded-lg overflow-hidden w-[1000px] h-[600px] relative flex">
        {/* Botón de cerrar */}
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl">
          ×
        </button>

        {/* Izquierda: Carrusel de imágenes (300px de ancho, 600px de alto) */}
        <div className="w-1/2 pr-2">
          <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} className="w-full h-full">
            {product.images.map((img, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Derecha: Detalles del producto (300px de ancho) */}
        <div className="w-1/2 pl-2 flex flex-col justify-center p-4">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-2xl text-gray-700 mb-4">{product.price}</p>
          {/* Línea divisoria */}
          <hr className="mb-4" />
          {/* Sección de características */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Características</h3>
            <p className="text-gray-600">
              {product.features ? product.features : "Sin características definidas."}
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
}
