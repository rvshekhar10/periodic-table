// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ElementTile = ({ element, categoryColor, isHighlighted, onClick }) => {
  const style = {
    gridColumn: element.xpos,
    gridRow: element.ypos,
  };

  return (
    <motion.div
      style={style}
      className={`w-16 h-16 ${categoryColor} cursor-pointer flex flex-col items-center justify-center text-lg font-bold transition-all duration-200 mb-1 ${
        isHighlighted ? 'ring-2 ring-blue-500 scale-110' : ''
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <div className="text-gray-800 dark:text-white">{element.symbol}</div>
      <div className="text-gray-600 dark:text-gray-300 text-xs">{element.number}</div>
    
    </motion.div>
  );
};

export default ElementTile;