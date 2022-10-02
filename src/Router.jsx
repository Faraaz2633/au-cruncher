import React from 'react';
import App from './App';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// GPA Routes
import { CSE, FirstSemCse, SecondSemCse, ThirdSemCse, FourthSemCse, FifthSemCse, SixthSemCse, SeventhSemCse, EighthSemCse } from './containers/gpa/cse/index';
import { IT, FirstSemIt, SecondSemIt, ThirdSemIt, FourthSemIt, FifthSemIt, SixthSemIt, SeventhSemIt, EighthSemIt } from './containers/gpa/it/index';
import { ECE, FirstSemEce, SecondSemEce, ThirdSemEce, FourthSemEce, FifthSemEce, SixthSemEce, SeventhSemEce, EightSemEce } from './containers/gpa/ece/index';
import { EEE, FirstSemEee, SecondSemEee, ThirdSemEee, FourthSemEee, FifthSemEee, SixthSemEee, SeventhSemEee, EightSemEee } from './containers/gpa/eee/index';
import { MECH, FirstSemMech, SecondSemMech, ThirdSemMech, FourthSemMech, FifthSemMech, SixthSemMech, SeventhSemMech, EightSemMech } from './containers/gpa/mech/index';
import { AUTO, FirstSemAuto, SecondSemAuto, ThirdSemAuto, FourthSemAuto, FifthSemAuto, SixthSemAuto, SeventhSemAuto, EightSemAuto } from './containers/gpa/auto/index';
import { CIVIL, FirstSemCivil, SecondSemCivil, ThirdSemCivil, FourthSemCivil, FifthSemCivil, SixthSemCivil, SeventhSemCivil, EightSemCivil } from './containers/gpa/civil/index';

// Syllabus Routes
import { Sem1Cse, Sem2Cse, Sem3Cse, Sem4Cse, Sem5Cse, Sem6Cse, Sem7Cse, Sem8Cse } from './containers/syllabus/cse';
import { Sem1It, Sem2It, Sem3It, Sem4It, Sem5It, Sem6It, Sem7It, Sem8It } from './containers/syllabus/it';
import { Sem1Ece, Sem2Ece, Sem3Ece, Sem4Ece, Sem5Ece, Sem6Ece, Sem7Ece, Sem8Ece } from './containers/syllabus/ece';
import { Sem1Eee, Sem2Eee, Sem3Eee, Sem4Eee, Sem5Eee, Sem6Eee, Sem7Eee, Sem8Eee } from './containers/syllabus/eee';
import { Sem1Mech, Sem2Mech, Sem3Mech, Sem4Mech, Sem5Mech, Sem6Mech, Sem7Mech, Sem8Mech } from './containers/syllabus/mech';
import { Sem1Auto, Sem2Auto, Sem3Auto, Sem4Auto, Sem5Auto, Sem6Auto, Sem7Auto, Sem8Auto } from './containers/syllabus/auto';
import { Sem1Civil, Sem2Civil, Sem3Civil, Sem4Civil, Sem5Civil, Sem6Civil, Sem7Civil, Sem8Civil } from './containers/syllabus/civil';

import GPA from './containers/gpa/GPA';

import MailForm from './components/MailForm';

import NoPage from './containers/NoPage';

import Header from './components/header/Header';

import Footer from './components/Footer';

import CollegeReview from './containers/college-review/CollegeReview';

import CreatePost from './containers/college-review/CreatePost';

import Syllabus from './containers/syllabus/Syllabus';

import Attendence from './containers/attendence/Attendence';

import CGPA from './containers/cgpa/CGPA'

import ScrollToTop from './components/ScrollToTop';

import About from './containers/about/About';

const Router = () => {
    return (
        <BrowserRouter>
            <Toaster />
            <Header />
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<App />} />

                    {/* GPA Routes */}

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
                    <Route path="/gpa/ece/1sem" element={<FirstSemEce />} />
                    <Route path="/gpa/ece/2sem" element={<SecondSemEce />} />
                    <Route path="/gpa/ece/3sem" element={<ThirdSemEce />} />
                    <Route path="/gpa/ece/4sem" element={<FourthSemEce />} />
                    <Route path="/gpa/ece/5sem" element={<FifthSemEce />} />
                    <Route path="/gpa/ece/6sem" element={<SixthSemEce />} />
                    <Route path="/gpa/ece/7sem" element={<SeventhSemEce />} />
                    <Route path="/gpa/ece/8sem" element={<EightSemEce />} />


                    <Route path="/gpa/eee" element={<EEE />} />
                    <Route path="/gpa/eee/1sem" element={<FirstSemEee />} />
                    <Route path="/gpa/eee/2sem" element={<SecondSemEee />} />
                    <Route path="/gpa/eee/3sem" element={<ThirdSemEee />} />
                    <Route path="/gpa/eee/4sem" element={<FourthSemEee />} />
                    <Route path="/gpa/eee/5sem" element={<FifthSemEee />} />
                    <Route path="/gpa/eee/6sem" element={<SixthSemEee />} />
                    <Route path="/gpa/eee/7sem" element={<SeventhSemEee />} />
                    <Route path="/gpa/eee/8sem" element={<EightSemEee />} />

                    <Route path="/gpa/mech" element={<MECH />} />
                    <Route path="/gpa/mech/1sem" element={<FirstSemMech />} />
                    <Route path="/gpa/mech/2sem" element={<SecondSemMech />} />
                    <Route path="/gpa/mech/3sem" element={<ThirdSemMech />} />
                    <Route path="/gpa/mech/4sem" element={<FourthSemMech />} />
                    <Route path="/gpa/mech/5sem" element={<FifthSemMech />} />
                    <Route path="/gpa/mech/6sem" element={<SixthSemMech />} />
                    <Route path="/gpa/mech/7sem" element={<SeventhSemMech />} />
                    <Route path="/gpa/mech/8sem" element={<EightSemMech />} />

                    <Route path="/gpa/auto" element={<AUTO />} />
                    <Route path="/gpa/auto/1sem" element={<FirstSemAuto />} />
                    <Route path="/gpa/auto/2sem" element={<SecondSemAuto />} />
                    <Route path="/gpa/auto/3sem" element={<ThirdSemAuto />} />
                    <Route path="/gpa/auto/4sem" element={<FourthSemAuto />} />
                    <Route path="/gpa/auto/5sem" element={<FifthSemAuto />} />
                    <Route path="/gpa/auto/6sem" element={<SixthSemAuto />} />
                    <Route path="/gpa/auto/7sem" element={<SeventhSemAuto />} />
                    <Route path="/gpa/auto/8sem" element={<EightSemAuto />} />

                    <Route path="/gpa/civil" element={<CIVIL />} />
                    <Route path="/gpa/civil/1sem" element={<FirstSemCivil />} />
                    <Route path="/gpa/civil/2sem" element={<SecondSemCivil />} />
                    <Route path="/gpa/civil/3sem" element={<ThirdSemCivil />} />
                    <Route path="/gpa/civil/4sem" element={<FourthSemCivil />} />
                    <Route path="/gpa/civil/5sem" element={<FifthSemCivil />} />
                    <Route path="/gpa/civil/6sem" element={<SixthSemCivil />} />
                    <Route path="/gpa/civil/7sem" element={<SeventhSemCivil />} />
                    <Route path="/gpa/civil/8sem" element={<EightSemCivil />} />

                    {/* Syllabus Routes */}

                    <Route path="/syllabus" element={<Syllabus />} />

                    <Route path="/syllabus/cse" element={<CSE />} />
                    <Route path="/syllabus/cse/1sem" element={<Sem1Cse />} />
                    <Route path="/syllabus/cse/2sem" element={<Sem2Cse />} />
                    <Route path="/syllabus/cse/3sem" element={<Sem3Cse />} />
                    <Route path="/syllabus/cse/4sem" element={<Sem4Cse />} />
                    <Route path="/syllabus/cse/5sem" element={<Sem5Cse />} />
                    <Route path="/syllabus/cse/6sem" element={<Sem6Cse />} />
                    <Route path="/syllabus/cse/7sem" element={<Sem7Cse />} />
                    <Route path="/syllabus/cse/8sem" element={<Sem8Cse />} />

                    <Route path="/syllabus/it" element={<IT />} />
                    <Route path="/syllabus/it/1sem" element={<Sem1It />} />
                    <Route path="/syllabus/it/2sem" element={<Sem2It />} />
                    <Route path="/syllabus/it/3sem" element={<Sem3It />} />
                    <Route path="/syllabus/it/4sem" element={<Sem4It />} />
                    <Route path="/syllabus/it/5sem" element={<Sem5It />} />
                    <Route path="/syllabus/it/6sem" element={<Sem6It />} />
                    <Route path="/syllabus/it/7sem" element={<Sem7It />} />
                    <Route path="/syllabus/it/8sem" element={<Sem8It />} />

                    <Route path="/syllabus/ece" element={<ECE />} />
                    <Route path="/syllabus/ece/1sem" element={<Sem1Ece />} />
                    <Route path="/syllabus/ece/2sem" element={<Sem2Ece />} />
                    <Route path="/syllabus/ece/3sem" element={<Sem3Ece />} />
                    <Route path="/syllabus/ece/4sem" element={<Sem4Ece />} />
                    <Route path="/syllabus/ece/5sem" element={<Sem5Ece />} />
                    <Route path="/syllabus/ece/6sem" element={<Sem6Ece />} />
                    <Route path="/syllabus/ece/7sem" element={<Sem7Ece />} />
                    <Route path="/syllabus/ece/8sem" element={<Sem8Ece />} />

                    <Route path="/syllabus/eee" element={<EEE />} />
                    <Route path="/syllabus/eee/1sem" element={<Sem1Eee />} />
                    <Route path="/syllabus/eee/2sem" element={<Sem2Eee />} />
                    <Route path="/syllabus/eee/3sem" element={<Sem3Eee />} />
                    <Route path="/syllabus/eee/4sem" element={<Sem4Eee />} />
                    <Route path="/syllabus/eee/5sem" element={<Sem5Eee />} />
                    <Route path="/syllabus/eee/6sem" element={<Sem6Eee />} />
                    <Route path="/syllabus/eee/7sem" element={<Sem7Eee />} />
                    <Route path="/syllabus/eee/8sem" element={<Sem8Eee />} />

                    <Route path="/syllabus/mech" element={<MECH />} />
                    <Route path="/syllabus/mech/1sem" element={<Sem1Mech />} />
                    <Route path="/syllabus/mech/2sem" element={<Sem2Mech />} />
                    <Route path="/syllabus/mech/3sem" element={<Sem3Mech />} />
                    <Route path="/syllabus/mech/4sem" element={<Sem4Mech />} />
                    <Route path="/syllabus/mech/5sem" element={<Sem5Mech />} />
                    <Route path="/syllabus/mech/6sem" element={<Sem6Mech />} />
                    <Route path="/syllabus/mech/7sem" element={<Sem7Mech />} />
                    <Route path="/syllabus/mech/8sem" element={<Sem8Mech />} />

                    <Route path="/syllabus/auto" element={<AUTO />} />
                    <Route path="/syllabus/auto/1sem" element={<Sem1Auto />} />
                    <Route path="/syllabus/auto/2sem" element={<Sem2Auto />} />
                    <Route path="/syllabus/auto/3sem" element={<Sem3Auto />} />
                    <Route path="/syllabus/auto/4sem" element={<Sem4Auto />} />
                    <Route path="/syllabus/auto/5sem" element={<Sem5Auto />} />
                    <Route path="/syllabus/auto/6sem" element={<Sem6Auto />} />
                    <Route path="/syllabus/auto/7sem" element={<Sem7Auto />} />
                    <Route path="/syllabus/auto/8sem" element={<Sem8Auto />} />

                    <Route path="/syllabus/civil" element={<CIVIL />} />
                    <Route path="/syllabus/civil/1sem" element={<Sem1Civil />} />
                    <Route path="/syllabus/civil/2sem" element={<Sem2Civil />} />
                    <Route path="/syllabus/civil/3sem" element={<Sem3Civil />} />
                    <Route path="/syllabus/civil/4sem" element={<Sem4Civil />} />
                    <Route path="/syllabus/civil/5sem" element={<Sem5Civil />} />
                    <Route path="/syllabus/civil/6sem" element={<Sem6Civil />} />
                    <Route path="/syllabus/civil/7sem" element={<Sem7Civil />} />
                    <Route path="/syllabus/civil/8sem" element={<Sem8Civil />} />


                    <Route path="/collegereview" element={<CollegeReview />} />
                    <Route path="/collegereview/createpost" element={<CreatePost />} />

                    <Route path="/attendence" element={<Attendence />} />

                    <Route path="/cgpa" element={<CGPA />} />

                    <Route path="/about" element={<About />} />

                    <Route path="mailForm" element={<MailForm />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </ScrollToTop>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;