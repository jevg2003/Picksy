import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Hero() {
  const products = [
    { id: 1, name: 'Producto 1', price: '$100', img: 'IMG/pan.jpg' },
    { id: 2, name: 'Producto 2', price: '$150', img: 'IMG/carne.jpg' },
    { id: 3, name: 'Producto 3', price: '$200', img: 'IMG/aguacate.jpg' },
  ];

  return (
    <section className="m-5 w-[98%] h-[500px] flex items-center justify-center bg-gray-100 relative">
      <div className="w-full h-[500px] relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="rounded-lg shadow-lg h-[500px]"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="relative h-[500px]">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Recuadro de información, cuadrado más grande */}
              <div className="absolute bottom-0 right-0 m-4 p-6 bg-black/70 rounded-lg w-70 h-40 flex flex-col justify-center items-center">
                <h3 className="text-xl font-bold text-white">{product.name}</h3>
                <p className="text-white mt-2">Precio: {product.price}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Saber más
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botones de navegación personalizados */}
        <button className="custom-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-black/50 bg-opacity-50 p-2 rounded-full text-blue-300 hover:bg-black/80 hover:bg-opacity-70">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className="custom-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-black/50 bg-opacity-50 p-2 rounded-full text-blue-300 hover:bg-black/80 hover:bg-opacity-70">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
