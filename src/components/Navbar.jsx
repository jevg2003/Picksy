// components/Navbar.jsx
import { useState, useEffect, memo } from "react";
import { Sun, Moon, Monitor, ShoppingCart, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";

const Navbar = memo(({ initialSearch = "" }) => {
  const [mode, setMode] = useState("system");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showThemeDropdown, setShowThemeDropdown] = useState(false);

  // Cargar y aplicar tema al montar
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setMode(savedTheme);
    applyDarkMode(savedTheme);
  }, []);

  // Aplicar tema cuando cambia el modo
  useEffect(() => {
    applyDarkMode(mode);
    localStorage.setItem("theme", mode);
  }, [mode]);

  // Cerrar menú en resize y limpiar scroll
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowMobileMenu(false);
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const applyDarkMode = (theme) => {
    const isDark =
      theme === "dark" ||
      (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", isDark);
  };

  return (
    <>
      <nav className="sticky top-0 bg-white dark:bg-gray-900 shadow-md z-40 transition-colors duration-300">
        <div className="max-w-10xl mx-auto px-4 h-16 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" aria-label="Inicio">
              <img
                src="./IMG/PICKSYName.svg"
                className="h-10 dark:hidden"
                alt="Picksy Logo"
                loading="lazy"
              />
              <img
                src="./IMG/PICKSYNameBlanco.svg"
                className="h-10 hidden dark:block"
                alt="Picksy Logo"
                loading="lazy"
              />
            </a>
          </div>

          {/* Elementos desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Barra de búsqueda */}
            <div className="w-96">
              <SearchBar initialSearch={initialSearch} />
            </div>

            {/* Selector de tema */}
            <div className="relative">
              <button
                onClick={() => setShowThemeDropdown(!showThemeDropdown)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300"
                aria-label="Selector de tema">
                <div className="relative w-6 h-6">
                  {["system", "dark", "light"].map((theme) => (
                    <div
                      key={theme}
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        mode === theme ? "opacity-100" : "opacity-0"
                      }`}>
                      {theme === "system" && (
                        <Monitor size={22} className="text-gray-900 dark:text-white" />
                      )}
                      {theme === "dark" && (
                        <Moon size={22} className="text-gray-900 dark:text-white" />
                      )}
                      {theme === "light" && (
                        <Sun size={22} className="text-gray-900 dark:text-white" />
                      )}
                    </div>
                  ))}
                </div>
              </button>

              {/* Dropdown temas */}
              {showThemeDropdown && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-2 transition-all duration-300 origin-top">
                  {["system", "dark", "light"].map((theme) => (
                    <button
                      key={theme}
                      onClick={() => {
                        setMode(theme);
                        setShowThemeDropdown(false);
                      }}
                      className={`w-full p-3 flex items-center gap-3 rounded-md transition-colors duration-300 ${
                        mode === theme
                          ? "bg-blue-100 dark:bg-gray-700"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}>
                      {theme === "system" && <Monitor size={18} />}
                      {theme === "dark" && <Moon size={18} />}
                      {theme === "light" && <Sun size={18} />}
                      <span className="capitalize">{theme}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Carrito */}
            <button
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all"
              aria-label="Carrito de compras">
              <ShoppingCart className="text-gray-900 dark:text-white" size={22} />
            </button>
          </div>

          {/* Elementos móvil */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
              aria-label="Carrito de compras">
              <ShoppingCart className="text-gray-900 dark:text-white" size={22} />
            </button>

            <button
              onClick={() => setShowMobileMenu(true)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all"
              aria-label="Abrir menú">
              <Menu className="text-gray-900 dark:text-white" size={22} />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        show={showMobileMenu}
        onClose={() => setShowMobileMenu(false)}
        currentMode={mode}
        onThemeChange={(newMode) => {
          setMode(newMode);
          setShowThemeDropdown(false);
        }}
      />
    </>
  );
});

export default Navbar;
