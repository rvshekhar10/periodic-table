import PeriodicTable from '../components/PeriodicTable';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-30">
      <div className="container mx-auto px-4 py-8">
        <PeriodicTable />
      </div>
    </div>
  );
};

export default Home;