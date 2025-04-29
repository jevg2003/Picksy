// components/SearchBar.tsx
import { Search } from 'lucide-react';

const SearchBar = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        placeholder="Buscar..."
        className="w-full pl-12 pr-4 py-2.5 text-sm bg-gray-100 dark:bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      />
      <Search className="absolute left-4 top-3 text-gray-500 dark:text-gray-400" size={18}/>
    </div>
  );
};

export default SearchBar;