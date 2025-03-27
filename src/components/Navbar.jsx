import { useState } from "react";
import { Sun, Moon, ShoppingCart, Search } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <nav className={`p-4 shadow-md flex justify-between items-center fixed top-0 left-0 w-full z-50 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
        {/* Logo */}
        <a href="">
          <img src="/IMG/PICKSYName.svg" alt="Logo de la empresa Picksy" className="h-10 w-auto mr-2" />
        </a>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-md mx-4">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <ShoppingCart className="cursor-pointer" size={24} />
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </nav>

      {/* Espaciado para evitar que el contenido quede oculto debajo del navbar */}
      <div className="h-16"></div>
    </>
  );
}

