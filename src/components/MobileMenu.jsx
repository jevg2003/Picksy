// components/MobileMenu.jsx
import { memo, useEffect } from 'react';
import { Sun, Moon, Monitor, Search, X } from 'lucide-react';
import FiltersList, { SocialIcons } from './Filters';

const MobileMenu = memo(({ show, onClose, currentMode, onThemeChange }) => {
  useEffect(() => {
    const handleEscape = (e) => e.key === 'Escape' && onClose();
    if (show) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [show, onClose]);

  return (
    <div className="lg:hidden">
      {/* Overlay con transición mejorada */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          show ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Contenedor principal con transiciones */}
      <div 
        className={`fixed bottom-0 left-0 right-0 h-[65vh] bg-white dark:bg-gray-900 z-50 rounded-t-3xl shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.17,0.89,0.32,1.2)] ${
          show ? 'translate-y-0' : 'translate-y-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-full flex flex-col transition-colors duration-300">
          {/* Cabecera con borde animado */}
          <div className="pt-5 px-6 pb-4 border-b dark:border-gray-700 transition-colors duration-300">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                Picksy
              </h1>
              <button 
                onClick={onClose}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-300"
                aria-label="Cerrar menú"
              >
                <X className="text-gray-600 dark:text-gray-300 transition-colors duration-300" size={24}/>
              </button>
            </div>
            
            {/* Barra de búsqueda con transición */}
            <div className="relative transition-all duration-300">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full pl-12 pr-4 py-3 text-base bg-gray-100 dark:bg-gray-800 rounded-xl focus:ring-2 focus:ring-blue-500 border-none transition-all duration-300"
              />
              <Search className="absolute left-4 top-3.5 text-gray-500 transition-colors duration-300" size={20}/>
            </div>
          </div>

          {/* Contenido con scroll mejorado */}
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6 scrollbar-none">
            {/* Selector de tema con animaciones */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300">
                Tema
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {['system', 'dark', 'light'].map((theme) => (
                  <button
                    key={theme}
                    onClick={() => {
                      onThemeChange(theme);
                    }}
                    className={`p-4 rounded-xl flex flex-col items-center gap-2 transition-all duration-300 ${
                      currentMode === theme 
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    <div className="relative w-6 h-6">
                      {['system', 'dark', 'light'].map((t) => (
                        <div
                          key={t}
                          className={`absolute inset-0 transition-all duration-300 ${
                            theme === t ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                          }`}
                        >
                          {t === 'system' && <Monitor size={20} className="transition-colors duration-300"/>}
                          {t === 'dark' && <Moon size={20} className="transition-colors duration-300"/>}
                          {t === 'light' && <Sun size={20} className="transition-colors duration-300"/>}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs capitalize transition-colors duration-300">
                      {theme}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Redes sociales con hover suave */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300">
                Redes sociales
              </h3>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl transition-colors duration-300">
                <SocialIcons/>
              </div>
            </div>

            {/* Filtros con scroll integrado */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300">
                Filtros
              </h3>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-2 transition-colors duration-300">
                <FiltersList/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MobileMenu;