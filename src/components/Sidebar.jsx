import React from 'react';

export default function Sidebar() {
  return (
    <aside className="fixed w-[15%] h-[90%] text-black flex flex-col">
      {/* Sección de redes sociales con fondo diferente */}
      <div className="bg-gray-400 p-4 flex justify-center pt-7 space-x-4">
        {/* Facebook */}
        <a
          href="https://www.facebook.com"
          className="text-gray-700 hover:text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12.07c0-5.52-4.48-10-10-10s-10 4.48-10 10c0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54v-2.2c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.25 0-1.64.78-1.64 1.57v1.84h2.8l-.45 2.89h-2.35v6.99c4.78-.75 8.44-4.89 8.44-9.88z"/>
          </svg>
        </a>
        {/* WhatsApp */}
        <a
          href="https://wa.me/tu-numero"
          className="text-gray-700 hover:text-green-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-6 h-6">
            <path d="M380.9 97.1C339 55.3 283.3 32 224 32 100.3 32 0 132.3 0 256c0 45.4 12 89.6 34.8 128.3L2.5 470.3c-4.1 17.4 11.7 33.2 29.1 29.1l86-32.3c38.5 21 82.5 32.9 128.4 32.9 123.7 0 224-100.3 224-224 0-59.3-23.3-115-65.1-157.9zM224 456c-40.8 0-80.6-11-115.3-31.9l-8.2-4.9-64 24 23.7-61.2-5.3-8.3C36.6 339.1 24 298.6 24 256 24 150 118 56 224 56c50.4 0 97.8 19.6 133.2 55.2S412 205.6 412 256c0 106-94 200-188 200zm106.4-149.5c-5.7-2.9-33.9-16.7-39.2-18.6-5.3-1.9-9.2-2.9-13.1 2.9-3.9 5.7-15 18.6-18.4 22.4-3.4 3.8-6.8 4.3-12.5 1.4-5.7-2.9-24.1-8.9-46-28.3-17-15.2-28.5-34-31.9-39.7-3.4-5.7-.4-8.8 2.6-11.6 2.7-2.7 5.7-6.8 8.6-10.2 2.9-3.4 3.8-5.7 5.7-9.6 1.9-3.8.9-7.2-.5-10.2-1.4-2.9-13.1-31.6-17.9-43.3-4.7-11.3-9.6-9.7-13.1-9.8h-11.2c-3.8 0-10.2 1.4-15.5 7.2s-20.4 19.9-20.4 48.8 20.9 56.7 23.7 60.6c2.9 3.8 41 63.4 99.4 88.9 58.3 25.5 58.3 17.2 68.8 16.2 10.5-1 33.9-13.8 38.7-27.2 4.8-13.4 4.8-24.9 3.4-27.3-1.5-2.3-5.3-3.7-11-6.6z" />
          </svg>
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com"
          className="text-gray-700 hover:text-pink-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm5-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </a>
        {/* Twitter (X) */}
        <a
          href="https://www.twitter.com"
          className="text-gray-700 hover:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.6 8.6 0 0 1-2.73 1.04 4.28 4.28 0 0 0-7.29 3.9A12.14 12.14 0 0 1 3.15 4.6a4.28 4.28 0 0 0 1.32 5.71 4.2 4.2 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98A8.6 8.6 0 0 1 2 18.58a12.1 12.1 0 0 0 6.56 1.92c7.87 0 12.17-6.52 12.17-12.17l-.01-.55A8.6 8.6 0 0 0 22.46 6z" />
          </svg>
        </a>
      </div>
      
      {/* Contenido del Sidebar */}
      <div className="flex-1 overflow-y-auto p-4 pb-20 scrollbar-custom">
        <h2 className="text-lg font-bold mb-10 text-gray-700">Categorías</h2>
        <ul className="space-y-2">
          <li className="cursor-pointer hover:text-blue-400">Cocina</li>
          <li className="cursor-pointer hover:text-blue-400">Sala</li>
          <li className="cursor-pointer hover:text-blue-400">Baños</li>
          <li className="cursor-pointer hover:text-blue-400">Patio</li>
          <li className="cursor-pointer hover:text-blue-400">Dormitorio</li>
          <li className="cursor-pointer hover:text-blue-400">Oficina</li>
          <li className="cursor-pointer hover:text-blue-400">Cocina</li>
        </ul>
      </div>
    </aside>
  );
}
