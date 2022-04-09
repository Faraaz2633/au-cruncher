import React from 'react';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import { CSE, FirstSemCse, SecondSemCse, ThirdSemCse, FourthSemCse, FifthSemCse, SixthSemCse, SeventhSemCse, EighthSemCse } from './containers/cse/index';

import { IT, FirstSemIt, SecondSemIt, ThirdSemIt, FourthSemIt, FifthSemIt, SixthSemIt, SeventhSemIt, EighthSemIt } from './containers/it/index';

import { ECE, FirstSemEce, SecondSemEce, ThirdSemEce, FourthSemEce, FifthSemEce, SixthSemEce, SeventhSemEce, EightSemEce } from './containers/ece/index';

import { EEE } from './containers/eee/index';

import { MECH } from './containers/mech/index';

import { AUTO } from './containers/auto/index';

import { CIVIL } from './containers/civil/index';

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

                <Route path="/ece" element={<ECE />} />
                <Route path="/ece/1sem" element={<FirstSemEce/>}/>
                <Route path="/ece/2sem" element={<SecondSemEce/>} />
                <Route path="/ece/3sem" element={<ThirdSemEce />} />
                <Route path="/ece/4sem" element={<FourthSemEce />} />
                <Route path="/ece/5sem" element={<FifthSemEce />} />
                <Route path="/ece/6sem" element={<SixthSemEce />} />
                <Route path="/ece/7sem" element={<SeventhSemEce />} />
                <Route path="/ece/8sem" element={<EightSemEce />} />


                <Route path="/eee" element={<EEE />} />

                <Route path="/mech" element={<MECH />} />

                <Route path="/auto" element={<AUTO />} />

                <Route path="/civil" element={<CIVIL />} />

                <Route path="*" element={<NoPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;