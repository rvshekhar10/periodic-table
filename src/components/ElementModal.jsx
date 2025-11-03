// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import BohrModel3D from './BohrModel3D';

const ElementModal = ({ element, onClose }) => {
  if (!element) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full h-full bg-black bg-opacity-20 backdrop-blur-sm overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="min-h-full p-8 md:p-8 lg:p-8">
          <div className="flex justify-between items-start mb-4">
            <div className="space-y-1">
              <h2 className="text-2xl md:text-2xl lg:text-2xl font-thin text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 tracking-wider">
                {element.name} | {element.symbol}
              </h2>
              <p className="text-lg md:text-sm font-extralight text-pink-300">
                Atomic Number: {element.number}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-3 hover:bg-white hover:bg-opacity-10 transition-all duration-300 border border-white border-opacity-20"
            >
              <X size={32} className="text-white" />
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm md:text-sm font-thin mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 tracking-wide">
                  Properties
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center border-b border-white border-opacity-10">
                    <span className="text-lg font-extralight text-cyan-200">Atomic Mass</span>
                    <span className="text-xl font-light text-yellow-300">{element.atomic_mass}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white border-opacity-10">
                    <span className="text-lg font-extralight text-cyan-200">Category</span>
                    <span className="text-xl font-light text-pink-300">{element.category}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white border-opacity-10">
                    <span className="text-lg font-extralight text-cyan-200">Phase</span>
                    <span className="text-xl font-light text-green-300">{element.phase}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white border-opacity-10">
                    <span className="text-lg font-extralight text-cyan-200">Density</span>
                    <span className="text-xl font-light text-orange-300">{element.density} g/cm³</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white border-opacity-10">
                    <span className="text-lg font-extralight text-cyan-200">Melting Point</span>
                    <span className="text-xl font-light text-red-300">{element.melt} K</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white border-opacity-10">
                    <span className="text-lg font-extralight text-cyan-200">Boiling Point</span>
                    <span className="text-xl font-light text-purple-300">{element.boil} K</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white border-opacity-10">
                    <span className="text-lg font-extralight text-cyan-200">Electron Config</span>
                    <span className="text-lg font-light text-indigo-300">{element.electron_configuration}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-thin mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 tracking-wide">
                  Summary
                </h3>
                <p className="text-md md:text-md font-extralight text-white leading-relaxed">{element.summary}</p>
              </div>

              {element.trivia && element.trivia.length > 0 && (
                <div>
                  <h3 className="text-xl md:text-2xl font-thin mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 tracking-wide">
                    Fun Facts
                  </h3>
                  <ul className="space-y-2">
                    {element.trivia.map((fact, index) => (
                      <li key={index} className="flex items-start space-x-4">
                        <span className="text-xl text-cyan-400 mt-1">✦</span>
                        <span className="text-md font-extralight text-gray-200 leading-relaxed">{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-thin mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 tracking-wide">
                3D Bohr Model
              </h3>
              <div className="h-[500px]">
                <BohrModel3D element={element} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ElementModal;