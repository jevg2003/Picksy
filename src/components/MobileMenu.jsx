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
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [show, onClose]);

  return (
    <div className="lg:hidden">
      {/* Overlay clickeable */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity ${
          show ? 'opacity-30' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Contenedor del menú */}
      <div 
        className={`fixed bottom-0 left-0 right-0 h-[65vh] bg-white dark:bg-gray-900 z-50 rounded-t-3xl shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.17,0.89,0.32,1.2)] ${
          show ? 'translate-y-0' : 'translate-y-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-full flex flex-col">
          {/* Cabecera */}
          <div className="pt-5 px-6 pb-4 border-b dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Picksy</h1>
              <button 
                onClick={onClose}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="text-gray-600 dark:text-gray-300" size={24}/>
              </button>
            </div>
            
            {/* Barra de búsqueda */}
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full pl-12 pr-4 py-3 text-base bg-gray-100 dark:bg-gray-800 rounded-xl focus:ring-2 focus:ring-blue-500 border-none"
              />
              <Search className="absolute left-4 top-3.5 text-gray-500" size={20}/>
            </div>
          </div>

          {/* Contenido con scroll */}
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
            {/* Selector de tema */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Tema</h3>
              <div className="grid grid-cols-3 gap-3">
                {['system', 'dark', 'light'].map((theme) => (
                  <button
                    key={theme}
                    onClick={() => onThemeChange(theme)}
                    className={`p-4 rounded-xl flex flex-col items-center gap-2 transition-all ${
                      currentMode === theme 
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {theme === 'system' && <Monitor size={20}/>}
                    {theme === 'dark' && <Moon size={20}/>}
                    {theme === 'light' && <Sun size={20}/>}
                    <span className="text-xs capitalize">{theme}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Redes sociales */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Redes sociales</h3>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <SocialIcons/>
              </div>
            </div>

            {/* Filtros */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Filtros</h3>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-2">
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