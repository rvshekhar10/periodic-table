import CategoryList from '../components/CategoryList';

const Categories = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-32">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Element Categories
        </h1>
        <CategoryList />
      </div>
    </div>
  );
};

export default Categories;