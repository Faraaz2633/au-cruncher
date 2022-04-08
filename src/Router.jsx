import React from 'react';

import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import { CSE, FirstSemCse, SecondSemCse, ThirdSemCse, FourthSemCse, FifthSemCse, SixthSemCse, SeventhSemCse, EighthSemCse } from './containers/cse/index';

import { IT, FirstSemIt, SecondSemIt, ThirdSemIt, FourthSemIt, FifthSemIt, SixthSemIt, SeventhSemIt, EighthSemIt } from './containers/it/index';
import NoPage from './containers/NoPage';

const Router = () => {
    return (
        <BrowserRouter>
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


                <Route path="/it" element={<IT />} />
                <Route path="/it/1sem" element={<FirstSemIt />} />
                <Route path="/it/2sem" element={<SecondSemIt />} />
                <Route path="/it/3sem" element={<ThirdSemIt />} />
                <Route path="/it/4sem" element={<FourthSemIt />} />
                <Route path="/it/5sem" element={<FifthSemIt />} />
                <Route path="/it/6sem" element={<SixthSemIt />} />
                <Route path="/it/7sem" element={<SeventhSemIt />} />
                <Route path="/it/8sem" element={<EighthSemIt />} />

                <Route path="*" element={<NoPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;