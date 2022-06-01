import React from 'react';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import { CSE, FirstSemCse, SecondSemCse, ThirdSemCse, FourthSemCse, FifthSemCse, SixthSemCse, SeventhSemCse, EighthSemCse } from './containers/gpa/cse/index';

import { IT, FirstSemIt, SecondSemIt, ThirdSemIt, FourthSemIt, FifthSemIt, SixthSemIt, SeventhSemIt, EighthSemIt } from './containers/gpa/it/index';

import { ECE, FirstSemEce, SecondSemEce, ThirdSemEce, FourthSemEce, FifthSemEce, SixthSemEce, SeventhSemEce, EightSemEce } from './containers/gpa/ece/index';

import { EEE, FirstSemEee, SecondSemEee, ThirdSemEee, FourthSemEee, FifthSemEee, SixthSemEee, SeventhSemEee, EightSemEee } from './containers/gpa/eee/index';

import { MECH, FirstSemMech, SecondSemMech, ThirdSemMech, FourthSemMech, FifthSemMech, SixthSemMech, SeventhSemMech, EightSemMech} from './containers/gpa/mech/index';

import { AUTO, FirstSemAuto, SecondSemAuto, ThirdSemAuto, FourthSemAuto, FifthSemAuto, SixthSemAuto, SeventhSemAuto, EightSemAuto} from './containers/gpa/auto/index';

import { CIVIL, FirstSemCivil, SecondSemCivil, ThirdSemCivil, FourthSemCivil, FifthSemCivil, SixthSemCivil, SeventhSemCivil, EightSemCivil } from './containers/gpa/civil/index';

import GPA from './containers/gpa/GPA';

import MailForm from './components/MailForm'; 

import NoPage from './containers/NoPage';

import Header from './components/header/Header';

import Footer from './components/Footer';
import CollegeReview from './containers/college-review/CollegeReview';
import Login from './containers/college-review/Login';
import Syllabus from './containers/syllabus/Syllabus';

import { Sem1Cse } from './containers/syllabus/cse';

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/gpa" element={<GPA />} />
                <Route path="/gpa/cse" element={<CSE />} />
                <Route path="/gpa/cse/1sem" element={<FirstSemCse />} />
                <Route path="/gpa/cse/2sem" element={<SecondSemCse />} />
                <Route path="/gpa/cse/3sem" element={<ThirdSemCse />} />
                <Route path="/gpa/cse/4sem" element={<FourthSemCse />} />
                <Route path="/gpa/cse/5sem" element={<FifthSemCse />} />
                <Route path="/gpa/cse/6sem" element={<SixthSemCse />} />
                <Route path="/gpa/cse/7sem" element={<SeventhSemCse />} />
                <Route path="/gpa/cse/8sem" element={<EighthSemCse />} />


                <Route path="/gpa/it" element={<IT />} />
                <Route path="/gpa/it/1sem" element={<FirstSemIt />} />
                <Route path="/gpa/it/2sem" element={<SecondSemIt />} />
                <Route path="/gpa/it/3sem" element={<ThirdSemIt />} />
                <Route path="/gpa/it/4sem" element={<FourthSemIt />} />
                <Route path="/gpa/it/5sem" element={<FifthSemIt />} />
                <Route path="/gpa/it/6sem" element={<SixthSemIt />} />
                <Route path="/gpa/it/7sem" element={<SeventhSemIt />} />
                <Route path="/gpa/it/8sem" element={<EighthSemIt />} />

                <Route path="/gpa/ece" element={<ECE />} />
                <Route path="/gpa/ece/1sem" element={<FirstSemEce />}/>
                <Route path="/gpa/ece/2sem" element={<SecondSemEce />} />
                <Route path="/gpa/ece/3sem" element={<ThirdSemEce />} />
                <Route path="/gpa/ece/4sem" element={<FourthSemEce />} />
                <Route path="/gpa/ece/5sem" element={<FifthSemEce />} />
                <Route path="/gpa/ece/6sem" element={<SixthSemEce />} />
                <Route path="/gpa/ece/7sem" element={<SeventhSemEce />} />
                <Route path="/gpa/ece/8sem" element={<EightSemEce />} />


                <Route path="/gpa/eee" element={<EEE />} />
                <Route path="/gpa/eee/1sem" element={<FirstSemEee />}/>
                <Route path="/gpa/eee/2sem" element={<SecondSemEee />} />
                <Route path="/gpa/eee/3sem" element={<ThirdSemEee />} />
                <Route path="/gpa/eee/4sem" element={<FourthSemEee />} />
                <Route path="/gpa/eee/5sem" element={<FifthSemEee />} />
                <Route path="/gpa/eee/6sem" element={<SixthSemEee />} />
                <Route path="/gpa/eee/7sem" element={<SeventhSemEee />} />
                <Route path="/gpa/eee/8sem" element={<EightSemEee />} />

                <Route path="/gpa/mech" element={<MECH />} />
                <Route path="/gpa/mech/1sem" element={<FirstSemMech />}/>
                <Route path="/gpa/mech/2sem" element={<SecondSemMech />} />
                <Route path="/gpa/mech/3sem" element={<ThirdSemMech />} />
                <Route path="/gpa/mech/4sem" element={<FourthSemMech />} />
                <Route path="/gpa/mech/5sem" element={<FifthSemMech />} />
                <Route path="/gpa/mech/6sem" element={<SixthSemMech />} />
                <Route path="/gpa/mech/7sem" element={<SeventhSemMech />} />
                <Route path="/gpa/mech/8sem" element={<EightSemMech />} />

                <Route path="/gpa/auto" element={<AUTO />} />
                <Route path="/gpa/auto/1sem" element={<FirstSemAuto />}/>
                <Route path="/gpa/auto/2sem" element={<SecondSemAuto />} />
                <Route path="/gpa/auto/3sem" element={<ThirdSemAuto />} />
                <Route path="/gpa/auto/4sem" element={<FourthSemAuto />} />
                <Route path="/gpa/auto/5sem" element={<FifthSemAuto />} />
                <Route path="/gpa/auto/6sem" element={<SixthSemAuto />} />
                <Route path="/gpa/auto/7sem" element={<SeventhSemAuto />} />
                <Route path="/gpa/auto/8sem" element={<EightSemAuto />} />

                <Route path="/gpa/civil" element={<CIVIL />} />
                <Route path="/gpa/civil/1sem" element={<FirstSemCivil />}/>
                <Route path="/gpa/civil/2sem" element={<SecondSemCivil />} />
                <Route path="/gpa/civil/3sem" element={<ThirdSemCivil />} />
                <Route path="/gpa/civil/4sem" element={<FourthSemCivil />} />
                <Route path="/gpa/civil/5sem" element={<FifthSemCivil />} />
                <Route path="/gpa/civil/6sem" element={<SixthSemCivil />} />
                <Route path="/gpa/civil/7sem" element={<SeventhSemCivil />} />
                <Route path="/gpa/civil/8sem" element={<EightSemCivil />} />

                <Route path="mailForm" element={<MailForm />} />

                <Route path="/syllabus" element={<Syllabus />} />
                <Route path="/syllabus/cse" element={<CSE />} />
                <Route path="/syllabus/cse/1sem" element={<Sem1Cse />} />

                <Route path="/collegereview" element={<CollegeReview />} />

                <Route path="/login" element={<Login />} />

                <Route path="*" element={<NoPage/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;