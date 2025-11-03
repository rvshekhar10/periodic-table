import useAppStore from '../store/useAppStore';

const CategoryFilters = () => {
  const { setHighlightedCategory, clearHighlight } = useAppStore();

  const categories = [
    { name: 'Alkali Metal', displayName: 'Alkali Metals', color: 'bg-red-500 hover:bg-red-600' },
    { name: 'Alkaline Earth Metal', displayName: 'Alkaline Earth Metals', color: 'bg-orange-500 hover:bg-orange-600' },
    { name: 'Transition Metal', displayName: 'Transition Metals', color: 'bg-yellow-500 hover:bg-yellow-600' },
    { name: 'Post-transition Metal', displayName: 'Post-transition Metals', color: 'bg-green-500 hover:bg-green-600' },
    { name: 'Metalloid', displayName: 'Metalloids', color: 'bg-teal-500 hover:bg-teal-600' },
    { name: 'Polyatomic Nonmetal', displayName: 'Polyatomic Nonmetals', color: 'bg-blue-500 hover:bg-blue-600' },
    { name: 'Diatomic Nonmetal', displayName: 'Diatomic Nonmetals', color: 'bg-indigo-500 hover:bg-indigo-600' },
    { name: 'Noble Gas', displayName: 'Noble Gases', color: 'bg-purple-500 hover:bg-purple-600' },
    { name: 'Lanthanide', displayName: 'Lanthanides', color: 'bg-pink-500 hover:bg-pink-600' },
    { name: 'Actinide', displayName: 'Actinides', color: 'bg-rose-500 hover:bg-rose-600' },
  ];

  const handleCategoryClick = (category) => {
    setHighlightedCategory(category.toLowerCase());
  };

  return (
    <div className="fixed top-15 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap items-center gap-2">

          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className={`px-3 py-1 text-white text-sm font-medium transition-all duration-200 ${category.color} whitespace-nowrap`}
            >
              {category.displayName}
            </button>
          ))}

          <button
            onClick={clearHighlight}
            className="px-3 py-1 bg-gray-500 hover:bg-gray-600 text-white text-sm font-medium transition-all duration-200 whitespace-nowrap"
          >
            Show All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;