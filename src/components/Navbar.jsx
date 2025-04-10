// components/Navbar.jsx
import { useState, useEffect, memo } from 'react';
import { ShoppingCart, Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Navbar = memo(() => {
  const [mode, setMode] = useState('system');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem('theme') || 'system';
    setMode(storedMode);
  }, []);

  useEffect(() => {
    const applyDark = mode === 'dark' || 
      (mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', applyDark);
    localStorage.setItem('theme', mode);
  }, [mode]);

  return (
    <>
      <nav className="sm:sticky top-0 bg-white dark:bg-gray-900 shadow-md z-40">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="./IMG/PICKSYName.svg" 
              className="h-8 dark:hidden" 
              alt="Picksy Logo"
            />
            <img 
              src="./IMG/PICKSYNameBlanco.svg" 
              className="h-8 hidden dark:block" 
              alt="Picksy Logo"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              <ShoppingCart className="text-gray-900 dark:text-white" size={22}/>
            </button>
            
            <button 
              onClick={() => setShowMobileMenu(true)}
              className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <Menu className="text-gray-900 dark:text-white" size={22}/>
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        show={showMobileMenu}
        onClose={() => setShowMobileMenu(false)}
        currentMode={mode}
        onThemeChange={setMode}
      />
    </>
  );
});

export default Navbar;