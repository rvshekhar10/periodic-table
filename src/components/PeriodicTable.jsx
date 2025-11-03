import { useState, useEffect } from 'react';
import ElementTile from './ElementTile';
import ElementModal from './ElementModal';
import useAppStore from '../store/useAppStore';
import elementsData from '../data/elements.json';

const PeriodicTable = () => {
  const [elements, setElements] = useState([]);
  const { selectedElement, setSelectedElement, highlightedCategory, searchTerm } = useAppStore();

  useEffect(() => {
    setElements(elementsData.elements);
  }, []);

  const getCategoryColor = (category) => {
    const colors = {
      'noble gas': 'bg-purple-200 dark:bg-purple-800',
      'alkali metal': 'bg-red-200 dark:bg-red-800',
      'alkaline earth metal': 'bg-orange-200 dark:bg-orange-800',
      'transition metal': 'bg-yellow-200 dark:bg-yellow-800',
      'post-transition metal': 'bg-green-200 dark:bg-green-800',
      'metalloid': 'bg-teal-200 dark:bg-teal-800',
      'polyatomic nonmetal': 'bg-blue-200 dark:bg-blue-800',
      'diatomic nonmetal': 'bg-indigo-200 dark:bg-indigo-800',
      'halogen': 'bg-lime-200 dark:bg-lime-800',
      'lanthanide': 'bg-pink-200 dark:bg-pink-800',
      'actinide': 'bg-rose-200 dark:bg-rose-800',
    };
    return colors[category] || 'bg-gray-200 dark:bg-gray-800';
  };

  const filteredElements = elements.filter(element => {
    const matchesSearch = element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         element.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !highlightedCategory || element.category === highlightedCategory;
    return matchesSearch && matchesCategory;
  });

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(18, 1fr)',
    gap: '0px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  return (
    <div className="p-4">
      <div style={gridStyle}>
        {filteredElements.map((element) => (
          <ElementTile
            key={element.number}
            element={element}
            categoryColor={getCategoryColor(element.category)}
            isHighlighted={highlightedCategory === element.category}
            onClick={() => setSelectedElement(element)}
          />
        ))}
      </div>
      {selectedElement && (
        <ElementModal
          element={selectedElement}
          onClose={() => setSelectedElement(null)}
        />
      )}
    </div>
  );
};

export default PeriodicTable;