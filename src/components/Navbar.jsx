import { useState, useEffect, useRef, useCallback, memo } from 'react';
import { Sun, Moon, Monitor, ShoppingCart, Search, X } from 'lucide-react';

const ThemeButton = memo(({ theme, currentMode, Icon, label, onClick }) => (
  <button
    onClick={() => onClick(theme)}
    className="flex-1 flex flex-col items-center justify-center py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
  >
    <Icon
      size={28}
      className={`mb-1 ${
        currentMode === theme
          ? 'text-blue-500'
          : 'text-gray-600 dark:text-gray-300'
      }`}
    />
    <span className="text-xs capitalize">{label}</span>
  </button>
));

export default function Navbar() {
  const [mode, setMode] = useState('system');
  const [mounted, setMounted] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showModeSelector, setShowModeSelector] = useState(false);
  const searchInputRef = useRef(null);

  // Efecto para cargar el tema desde localStorage solo en cliente
  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const storedMode = localStorage.getItem('theme');
      if (storedMode) setMode(storedMode);
    }
  }, []);

  // Efecto para aplicar el tema
  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;
    
    const applyDarkMode = (shouldApply) => {
      document.documentElement.classList.toggle('dark', shouldApply);
      localStorage.setItem('theme', mode);
    };

    if (mode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = (e) => applyDarkMode(e.matches);
      mediaQuery.addEventListener('change', handler);
      applyDarkMode(mediaQuery.matches);
      return () => mediaQuery.removeEventListener('change', handler);
    }
    
    applyDarkMode(mode === 'dark');
  }, [mode, mounted]);

  useEffect(() => {
    if (showMobileSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showMobileSearch]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const isMobile = window.innerWidth < 1024;
    document.body.style.overflow = (showMobileSearch || showModeSelector) && isMobile 
      ? 'hidden' 
      : '';
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [showMobileSearch, showModeSelector]);

  const handleSetMode = useCallback((newMode) => {
    setMode(newMode);
    setShowModeSelector(false);
  }, []);

  const toggleMobileSearch = useCallback(() => {
    setShowMobileSearch(prev => !prev);
  }, []);

  const toggleModeSelector = useCallback(() => {
    setShowModeSelector(prev => !prev);
  }, []);

  const getCurrentModeIcon = () => {
    if (!mounted) return <Monitor size={24} />;
    return {
      system: <Monitor size={24} />,
      dark: <Moon size={24} />,
      light: <Sun size={24} />
    }[mode];
  };

  return (
    <>
      <nav className="sm:fixed top-0 left-0 w-full z-50 p-4 shadow-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="flex flex-col gap-2 relative">
          <div className="flex justify-between items-center">
            <a href="#" aria-label="Home">
              <img
                src="./IMG/PICKSYName.svg"
                alt="Picksy Logo"
                className="h-10 w-auto mr-2 dark:hidden"
                loading="lazy"
              />
              <img
                src="./IMG/PICKSYNameBlanco.svg"
                alt="Picksy Dark Logo"
                className="h-10 w-auto hidden dark:block"
                loading="lazy"
              />
            </a>

            <div className="hidden lg:flex flex-1 mx-4 justify-center">
              <div className="relative w-[35%]">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-full p-2 pl-10 pr-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600 dark:focus:ring-gray-400 bg-transparent border-gray-700 placeholder-gray-400 text-lg"
                />
                <Search className="absolute left-3 top-3.5 text-gray-500" size={18} />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                className="p-2 lg:hidden transition-transform hover:scale-110"
                onClick={toggleMobileSearch}
                aria-label="Search"
              >
                <Search size={24} className="text-gray-900 dark:text-white" />
              </button>
              
              <ShoppingCart className="cursor-pointer" size={24} aria-label="Cart" />
              
              <div className="relative">
                <button
                  className="p-2 transition-transform duration-200 hover:scale-110"
                  onClick={toggleModeSelector}
                  aria-label="Theme selector"
                >
                  {getCurrentModeIcon()}
                </button>
                
                <div className={`hidden lg:block absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded shadow-lg transition-all duration-300 ease-out ${
                  showModeSelector 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-2 pointer-events-none'
                }`}>
                  <div className="flex divide-x divide-gray-300 dark:divide-gray-700">
                    <ThemeButton
                      theme="system"
                      currentMode={mode}
                      Icon={Monitor}
                      label="System"
                      onClick={handleSetMode}
                    />
                    <ThemeButton
                      theme="dark"
                      currentMode={mode}
                      Icon={Moon}
                      label="Dark"
                      onClick={handleSetMode}
                    />
                    <ThemeButton
                      theme="light"
                      currentMode={mode}
                      Icon={Sun}
                      label="Light"
                      onClick={handleSetMode}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <MobileThemeSelector
            show={showModeSelector}
            currentMode={mode}
            onClose={() => setShowModeSelector(false)}
            onSelect={handleSetMode}
          />

          <MobileSearchBar
            show={showMobileSearch}
            inputRef={searchInputRef}
            onClose={() => setShowMobileSearch(false)}
          />
        </div>
      </nav>
      <div className="sm:h-19" />
    </>
  );
}

const MobileThemeSelector = memo(({ show, currentMode, onClose, onSelect }) => (
  <div className="lg:hidden">
    <div className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-16 bg-white dark:bg-gray-900 z-[60] flex items-center justify-center rounded-t-xl transition-all duration-300 ease-out ${
      show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
    }`}>
      <ThemeButton theme="system" currentMode={currentMode} Icon={Monitor} onClick={onSelect} />
      <ThemeButton theme="dark" currentMode={currentMode} Icon={Moon} onClick={onSelect} />
      <ThemeButton theme="light" currentMode={currentMode} Icon={Sun} onClick={onSelect} />
      <button onClick={onClose} className="absolute top-2 right-4" aria-label="Close">
      </button>
    </div>
  </div>
));

const MobileSearchBar = memo(({ show, inputRef, onClose }) => (
  <div
    className="lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out"
    style={{ maxHeight: show ? '60px' : '0px' }}
  >
    <div className="w-full p-4 bg-white dark:bg-gray-900">
      <div className="relative w-full">
        <input
          ref={inputRef}
          type="text"
          placeholder="Buscar..."
          className="w-full p-2 pl-10 pr-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 placeholder-gray-400 text-base"
        />
        <Search className="absolute left-3 top-3 text-gray-500" size={18} />
        <button onClick={onClose} className="absolute right-3 top-2.5" aria-label="Close">
          <X size={24} className="text-gray-500" />
        </button>
      </div>
    </div>
  </div>
));