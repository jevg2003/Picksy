import { Search } from "lucide-react";
import { useState, type FormEvent } from "react";

interface SearchBarProps {
  className?: string;
  initialSearch?: string;
}

const SearchBar = ({ className = "", initialSearch = "" }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState(initialSearch || "");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const newUrl = new URL(window.location.href);

    if (searchTerm.trim()) {
      newUrl.searchParams.set("search", searchTerm.trim());
    } else {
      newUrl.searchParams.delete("search");
    }

    // Recargar la página con la nueva URL
    window.location.href = newUrl.toString();
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar..."
        className={`w-full pl-12 pr-4 py-2.5 text-sm bg-gray-100 dark:bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${className}`}
      />
      <button
        type="submit"
        className="absolute left-4 top-3 text-gray-500 dark:text-gray-400"
        aria-label="Buscar">
        <Search size={18} />
      </button>
    </form>
  );
};

export default SearchBar;
