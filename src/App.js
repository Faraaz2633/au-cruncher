import './App.css';
import { Link } from 'react-router-dom'
import { navData } from './data/navData';

function App() {
  return (
    <div className="grid items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 p-4 App">
      {navData.map(data => (
        <Link key={data.name} to={data.to} className="block p-6 max-w-sm m-auto w-[15rem] h-[10rem] items-center rounded-lg border shadow-md  bg-gray-800 border-gray-700 hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold text-white">{data.name}</h5>
          <p className="font-normal text-gray-400">{data.expansion}</p>
        </Link>
      ))}
    </div>
  );
}

export default App;
