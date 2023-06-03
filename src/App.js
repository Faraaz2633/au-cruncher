import { Analytics } from '@vercel/analytics/react';
import "./App.css";
import HomePage from "./containers/HomePage/HomePage";

function App() {
  return (
    <div>
      <HomePage />
      <Analytics />
    </div>
  );
}

export default App;
