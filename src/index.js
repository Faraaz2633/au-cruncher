import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

import { CSE, FirstSemCse, SecondSemCse, ThirdSemCse, FourthSemCse, FifthSemCse, SixthSemCse, SeventhSemCse, EighthSemCse} from './containers/cse/index';


import FifthSemIt from './containers/It/FifthSemIt';



ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cse" element={<CSE />} />
      <Route path="/cse/1sem" element={<FirstSemCse />} />
      <Route path="/cse/2sem" element={<SecondSemCse />} />
      <Route path="/cse/3sem" element={<ThirdSemCse />} />
      <Route path="/cse/4sem" element={<FourthSemCse />} />
      <Route path="/cse/5sem" element={<FifthSemCse />} />
      <Route path="/cse/6sem" element={<SixthSemCse />} />
      <Route path="/cse/7sem" element={<SeventhSemCse />} />
      <Route path="/cse/8sem" element={<EighthSemCse />} />
      

      <Route path="/it" element={<It/>}/>
      <Route path="/it/5sem" element={ <FifthSemIt />} />
      {/* <Route path="/it/4sem" element={<Fou/>} /> */}
    </Routes>
  </Router>,
  document.getElementById('root')
);

function It() {
  return (
    <div>
      <Link to="5sem"> Fifth Sem</Link>
      <Link to="4sem">Fourth Sem</Link>

    </div>
  )
}