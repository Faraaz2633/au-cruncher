import React from 'react';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import { CSE, FirstSemCse, SecondSemCse, ThirdSemCse, FourthSemCse, FifthSemCse, SixthSemCse, SeventhSemCse, EighthSemCse } from './containers/cse/index';

import { IT, FirstSemIt, SecondSemIt, ThirdSemIt, FourthSemIt, FifthSemIt, SixthSemIt, SeventhSemIt, EighthSemIt } from './containers/it/index';

import { ECE, FirstSemEce, SecondSemEce, ThirdSemEce, FourthSemEce, FifthSemEce, SixthSemEce, SeventhSemEce, EightSemEce } from './containers/ece/index';

import { EEE, FirstSemEee, SecondSemEee, ThirdSemEee, FourthSemEee, FifthSemEee, SixthSemEee, SeventhSemEee, EightSemEee } from './containers/eee/index';

import { MECH, FirstSemMech, SecondSemMech, ThirdSemMech, FourthSemMech, FifthSemMech, SixthSemMech, SeventhSemMech, EightSemMech} from './containers/mech/index';

import { AUTO, FirstSemAuto, SecondSemAuto, ThirdSemAuto, FourthSemAuto, FifthSemAuto, SixthSemAuto, SeventhSemAuto, EightSemAuto} from './containers/auto/index';

import { CIVIL, FirstSemCivil, SecondSemCivil, ThirdSemCivil, FourthSemCivil, FifthSemCivil, SixthSemCivil, SeventhSemCivil, EightSemCivil } from './containers/civil/index';

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
                <Route path="/ece/1sem" element={<FirstSemEce />}/>
                <Route path="/ece/2sem" element={<SecondSemEce />} />
                <Route path="/ece/3sem" element={<ThirdSemEce />} />
                <Route path="/ece/4sem" element={<FourthSemEce />} />
                <Route path="/ece/5sem" element={<FifthSemEce />} />
                <Route path="/ece/6sem" element={<SixthSemEce />} />
                <Route path="/ece/7sem" element={<SeventhSemEce />} />
                <Route path="/ece/8sem" element={<EightSemEce />} />


                <Route path="/eee" element={<EEE />} />
                <Route path="/eee/1sem" element={<FirstSemEee />}/>
                <Route path="/eee/2sem" element={<SecondSemEee />} />
                <Route path="/eee/3sem" element={<ThirdSemEee />} />
                <Route path="/eee/4sem" element={<FourthSemEee />} />
                <Route path="/eee/5sem" element={<FifthSemEee />} />
                <Route path="/eee/6sem" element={<SixthSemEee />} />
                <Route path="/eee/7sem" element={<SeventhSemEee />} />
                <Route path="/eee/8sem" element={<EightSemEee />} />

                <Route path="/mech" element={<MECH />} />
                <Route path="/mech/1sem" element={<FirstSemMech />}/>
                <Route path="/mech/2sem" element={<SecondSemMech />} />
                <Route path="/mech/3sem" element={<ThirdSemMech />} />
                <Route path="/mech/4sem" element={<FourthSemMech />} />
                <Route path="/mech/5sem" element={<FifthSemMech />} />
                <Route path="/mech/6sem" element={<SixthSemMech />} />
                <Route path="/mech/7sem" element={<SeventhSemMech />} />
                <Route path="/mech/8sem" element={<EightSemMech />} />

                <Route path="/auto" element={<AUTO />} />
                <Route path="/auto/1sem" element={<FirstSemAuto />}/>
                <Route path="/auto/2sem" element={<SecondSemAuto />} />
                <Route path="/auto/3sem" element={<ThirdSemAuto />} />
                <Route path="/auto/4sem" element={<FourthSemAuto />} />
                <Route path="/auto/5sem" element={<FifthSemAuto />} />
                <Route path="/auto/6sem" element={<SixthSemAuto />} />
                <Route path="/auto/7sem" element={<SeventhSemAuto />} />
                <Route path="/auto/8sem" element={<EightSemAuto />} />

                <Route path="/civil" element={<CIVIL />} />
                <Route path="/civil/1sem" element={<FirstSemCivil />}/>
                <Route path="/civil/2sem" element={<SecondSemCivil />} />
                <Route path="/civil/3sem" element={<ThirdSemCivil />} />
                <Route path="/civil/4sem" element={<FourthSemCivil />} />
                <Route path="/civil/5sem" element={<FifthSemCivil />} />
                <Route path="/civil/6sem" element={<SixthSemCivil />} />
                <Route path="/civil/7sem" element={<SeventhSemCivil />} />
                <Route path="/civil/8sem" element={<EightSemCivil />} />

                <Route path="*" element={<NoPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;