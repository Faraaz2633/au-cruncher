import './App.css';
// import FifthSem from './containers/cse/FifthSemCse';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="grid items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 p-4 App">
      <Link to="cse" className="block p-6 max-w-sm m-auto w-[15rem] h-[10rem] items-center rounded-lg border shadow-md  bg-gray-800 border-gray-700 hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold text-white">CSE</h5>
        <p className="font-normal text-gray-400">Computer Science and Engineering</p>
      </Link>
      
      <Link to="it" className="block p-6 max-w-sm m-auto w-[15rem] h-[10rem] items-center rounded-lg border shadow-md  bg-gray-800 border-gray-700 hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold text-white">IT</h5>
        <p class="font-normal text-gray-400">Information Technology</p>
      </Link>
      
      <Link to="cse" className="block p-6 max-w-sm m-auto w-[15rem] h-[10rem] items-center rounded-lg border shadow-md  bg-gray-800 border-gray-700 hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ECE</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Electronics and Communication Engineering</p>
      </Link>
      
      <Link to="cse" className="block p-6 max-w-sm m-auto w-[15rem] h-[10rem] items-center rounded-lg border shadow-md  bg-gray-800 border-gray-700 hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MECH</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Mechanical Engineering</p>
      </Link>
      
      <Link to="cse" className="block p-6 max-w-sm m-auto w-[15rem] h-[10rem] items-center rounded-lg border shadow-md  bg-gray-800 border-gray-700 hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">EEE</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Electrical and Electronics Engineering</p>
      </Link>
      
      <Link to="cse" className="block p-6 max-w-sm m-auto w-[15rem] h-[10rem] items-center rounded-lg border shadow-md  bg-gray-800 border-gray-700 hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CIVIL</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Civil Engineering</p>
      </Link>
      <Link to="cse" className="block p-6 max-w-sm m-auto w-[15rem] h-[10rem] items-center rounded-lg border shadow-md  bg-gray-800 border-gray-700 hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">AUTO</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Auto Mobile Engineering</p>
      </Link>
      <Link to="cse" className="block p-6 max-w-sm m-auto w-[15rem] h-[10rem] items-center rounded-lg border shadow-md  bg-gray-800 border-gray-700 hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CIVIL</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Civil Engineering</p>
      </Link>
    </div>
  );
}

export default App;
