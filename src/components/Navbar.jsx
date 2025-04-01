import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Monitor, ShoppingCart, Search, X } from "lucide-react";

export default function Navbar() {
  // Inicializa el modo: system, dark o light, usando localStorage o "system" por defecto.
  const [mode, setMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "system";
    }
    return "system";
  });

  // Estado para controlar la visualización del overlay de búsqueda en móviles/tablet.
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);
  const searchInputRef = useRef(null);

  // Cuando se muestre el overlay, enfoca el input para abrir el teclado en móviles.
  useEffect(() => {
    if (showSearchOverlay && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearchOverlay]);

  // Actualiza la clase "dark" según el modo seleccionado.
  useEffect(() => {
    if (mode === "system") {
      // Usa la preferencia del sistema y escucha cambios.
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const applySystemPreference = () => {
        if (mediaQuery.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      };
      applySystemPreference();
      mediaQuery.addEventListener("change", applySystemPreference);
      return () => {
        mediaQuery.removeEventListener("change", applySystemPreference);
      };
    } else if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else if (mode === "light") {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", mode);
  }, [mode]);

  // Función para ciclar entre system -> dark -> light -> system.
  const handleToggleTheme = () => {
    if (mode === "system") {
      setMode("dark");
    } else if (mode === "dark") {
      setMode("light");
    } else if (mode === "light") {
      setMode("system");
    }
  };

  return (
    <>
      {/* Navbar principal */}
      <nav className="p-4 shadow-md flex justify-between items-center fixed top-0 left-0 w-full z-50 transition-colors bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        {/* Logo */}
        <a href="">
          <img
            src="./IMG/PICKSYName.svg"
            alt="Logo de la empresa Picksy"
            className="h-10 w-auto mr-2 dark:hidden"
          />
          <img
            src="./IMG/PICKSYNameBlanco.svg"
            alt="Logo Dark Mode"
            className="h-10 w-auto hidden dark:block"
          />
        </a>

        {/* Buscador para pantallas grandes (lg) */}
        <div className="hidden lg:flex flex-1 mx-4 justify-center">
          <div className="relative w-[35%]">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full p-2 pl-10 pr-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600 dark:focus:ring-gray-400 transition-colors bg-transparent text-gray-900 dark:text-white dark:border-gray-700 dark:placeholder-gray-400 text-lg"
            />
            <Search
              className="absolute left-3 top-3.5 transition-colors text-gray-500 dark:text-gray-400"
              size={18}
            />
          </div>
        </div>

        {/* Íconos para móviles/tablet (botón de búsqueda, carrito y toggle de tema) */}
        <div className="flex items-center gap-4">
          {/* Botón de búsqueda (visible en mobile/tablet) */}
          <button
            className="lg:hidden p-2"
            onClick={() => setShowSearchOverlay(true)}
          >
            <Search
              size={24}
              className="transition-colors text-gray-500 dark:text-gray-400"
            />
          </button>
          <ShoppingCart className="cursor-pointer" size={24} />
          <button onClick={handleToggleTheme}>
            {mode === "system" ? (
              <Monitor size={24} />
            ) : mode === "dark" ? (
              <Moon size={24} />
            ) : (
              <Sun size={24} />
            )}
          </button>
        </div>
      </nav>

      {/* Overlay de búsqueda para dispositivos móviles/tablet */}
      {showSearchOverlay && (
        <div
          onClick={() => setShowSearchOverlay(false)}
          className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm flex items-start justify-center pt-4"
        >
          <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-md">
            <div className="relative">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Buscar..."
                className="w-full p-2 pl-10 pr-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600 dark:focus:ring-gray-400 transition-colors bg-transparent text-gray-900 dark:text-white dark:border-gray-100 dark:placeholder-gray-400 text-lg"
              />
              {/* Ícono de búsqueda a la izquierda */}
              <Search
                className="absolute left-3 top-3.5 transition-colors text-gray-500 dark:text-gray-400"
                size={18}
              />
              {/* Botón de cerrar (X) dentro de la barra, a la derecha */}
              <button
                onClick={() => setShowSearchOverlay(false)}
                className="absolute right-3 top-2.5"
              >
                <X size={24} className="text-gray-500 dark:text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Espaciado para evitar que el contenido quede oculto debajo del navbar */}
      <div className="h-16 md:h-16"></div>
    </>
  );
}
