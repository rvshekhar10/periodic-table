// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useAppStore from '../store/useAppStore';

const categories = [
  'Alkali Metals',
  'Alkaline Earth Metals',
  'Transition Metals',
  'Post-transition Metals',
  'Metalloids',
  'Polyatomic Nonmetals',
  'Diatomic Nonmetals',
  'Halogens',
  'Noble Gases',
  'Lanthanides',
  'Actinides',
];

const CategoryList = () => {
  const navigate = useNavigate();
  const { setHighlightedCategory, clearHighlight } = useAppStore();

  const handleCategoryClick = (category) => {
    setHighlightedCategory(category.toLowerCase().replace(' ', ' '));
    navigate('/');
  };

  const handleShowAll = () => {
    clearHighlight();
    navigate('/');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((category, index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 p-6 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => handleCategoryClick(category)}
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            {category}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Click to highlight {category.toLowerCase()} in the periodic table
          </p>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: categories.length * 0.1 }}
        className="bg-blue-500 text-white p-6 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
        onClick={handleShowAll}
      >
        <h3 className="text-lg font-semibold mb-2">Show All Elements</h3>
        <p className="text-sm">Reset highlighting and show all elements</p>
      </motion.div>
    </div>
  );
};

export default CategoryList;