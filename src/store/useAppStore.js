import { create } from 'zustand';

const useAppStore = create((set) => ({
  selectedElement: null,
  highlightedCategory: null,
  searchTerm: '',
  darkMode: false,
  setSelectedElement: (element) => set({ selectedElement: element }),
  setHighlightedCategory: (category) => set({ highlightedCategory: category }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  clearHighlight: () => set({ highlightedCategory: null }),
}));

export default useAppStore;