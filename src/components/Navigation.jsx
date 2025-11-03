import { Link } from 'react-router-dom';
import { Home, Grid3X3, Search, Sun, Moon, Beaker } from 'lucide-react';
import useAppStore from '../store/useAppStore';

const Navigation = () => {
  const { searchTerm, setSearchTerm } = useAppStore();



  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-xl backdrop-blur-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Logo and Main Navigation */}
          <div className="flex items-center justify-between lg:justify-start">
            <div className="flex items-center space-x-2">
              <Beaker className="w-8 h-8 text-white" />
              <h1 className="text-xl font-bold text-white">Periodic Table</h1>
            </div>

            <div className="flex space-x-2 lg:hidden">
              <Link
                to="/"
                className="p-2 bg-white/10 text-white hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                <Home className="w-5 h-5" />
              </Link>
              <Link
                to="/categories"
                className="p-2 bg-white/10 text-white hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                <Grid3X3 className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search elements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm border-0 focus:ring-2 focus:ring-white/50 focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 transition-all duration-200"
              />
            </div>
          </div>

          {/* Desktop Navigation and Controls */}
          {/* <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/"
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 text-white hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link
              to="/categories"
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 text-white hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              <Grid3X3 className="w-4 h-4" />
              <span>Categories</span>
            </Link>
            
            
            
            <button
              onClick={toggleDarkMode}
              className="p-2 bg-white/10 text-white hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div> */}

          {/* Mobile Dark Mode Toggle */}
          {/* <div className="lg:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;