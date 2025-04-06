import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Monitor, ShoppingCart, Search, X } from "lucide-react";

export default function Navbar() {
  // El modo puede ser "system", "dark" o "light"
  const [mode, setMode] = useState("system");
  const [mounted, setMounted] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const searchInputRef = useRef(null);

  // Al montar, indicamos que el componente ya está en el cliente y leemos el modo guardado
  useEffect(() => {
    setMounted(true);
    const storedMode = localStorage.getItem("theme");
    if (storedMode) {
      setMode(storedMode);
    }
  }, []);

  // Actualiza la clase "dark" en el documento según el modo seleccionado
  useEffect(() => {
    if (!mounted) return;

    if (mode === "system") {
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
  }, [mode, mounted]);

  // Enfoca el input de búsqueda en mobile cuando se muestra la barra
  useEffect(() => {
    if (showMobileSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showMobileSearch]);

  // Función para establecer el modo seleccionado
  const handleSetMode = (newMode) => {
    setMode(newMode);
  };

  // Calcula la posición del indicador según el modo
  const getIndicatorStyle = () => {
    let translatePercent = 0;
    if (mode === "system") {
      translatePercent = 0;
    } else if (mode === "dark") {
      translatePercent = 100;
    } else if (mode === "light") {
      translatePercent = 200;
    }
    return {
      transform: `translateX(${translatePercent}%)`
    };
  };

  // Función para asignar color al ícono según si está activo
  const getIconColor = (btnMode) => {
    return mode === btnMode ? "text-white" : "text-gray-700";
  };

  return (
    <>
      <nav className=" sm:fixed top-0 left-0 w-full z-50 p-4 shadow-md bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <div className="flex flex-col gap-2">
          {/* Primera fila: logo, buscador y otros íconos */}
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#">
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

            {/* Buscador para pantallas grandes */}
            <div className="hidden lg:flex flex-1 mx-4 justify-center">
              <div className="relative w-[35%]">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-full p-2 pl-10 pr-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600 dark:focus:ring-gray-400 bg-transparent text-gray-900 dark:text-white border-gray-700 placeholder-gray-400 text-lg"
                />
                <Search
                  className="absolute left-3 top-3.5 text-gray-500"
                  size={18}
                />
              </div>
            </div>

            {/* Íconos para mobile */}
            <div className="flex items-center gap-4 lg:hidden">
              <button
                className="p-2"
                onClick={() => setShowMobileSearch((prev) => !prev)}
              >
                <Search size={24} className="text-gray-900" />
              </button>
              <ShoppingCart className="cursor-pointer" size={24} />
            </div>
          </div>

          {/* Segunda fila: Barra de Dark Mode con íconos */}
          <div className="flex justify-center">
            <div className="relative w-30 h-12 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center overflow-hidden">
              {/* Indicador animado (bolita) */}
              <div
                className="absolute h-10 w-10 bg-blue-500 rounded-full shadow-md transition-all duration-300"
                style={getIndicatorStyle()}
              ></div>
              {/* Botones: cada uno ocupa 1/3 */}
              <div className="flex justify-around items-center relative w-full z-10">
                <button
                  onClick={() => handleSetMode("system")}
                  className="w-1/3 flex justify-center items-center"
                >
                  <Monitor size={24} className={getIconColor("system")} />
                </button>
                <button
                  onClick={() => handleSetMode("dark")}
                  className="w-1/3 flex justify-center items-center"
                >
                  <Moon size={24} className={getIconColor("dark")} />
                </button>
                <button
                  onClick={() => handleSetMode("light")}
                  className="w-1/3 flex justify-center items-center"
                >
                  <Sun size={24} className={getIconColor("light")} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Barra de búsqueda móvil (se desliza desde la derecha) */}
        <div
          className={`lg:hidden absolute top-0 right-0 h-full flex items-center pr-4 transition-transform duration-300 ${
            showMobileSearch ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ width: "65%" }}
        >
          <div className="relative w-full">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Buscar..."
              className="w-full p-2 pl-10 pr-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600 bg-white text-gray-900 border-gray-700 placeholder-gray-400 text-base"
            />
            <Search
              className="absolute left-3 top-3 text-gray-500"
              size={18}
            />
            <button
              onClick={() => setShowMobileSearch(false)}
              className="absolute right-3 top-2.5"
            >
              <X size={24} className="text-gray-500" />
            </button>
          </div>
        </div>
      </nav>

      {/* Espaciador para que el contenido no quede oculto debajo del navbar */}
      <div className="sm:h-33"></div>
    </>
  );
}
