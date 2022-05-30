import React, { useContext, useState } from 'react'
import Modal from '../../../components/Modal';
import Subject from '../../../components/Subject';
import { ResultContext } from '../../../context/Context';

const EighthSemCse = () => {
    const [sub1Grade, setSub1Grade] = useState(10);
    const [sub1Credit, setSub1Credit] = useState(3);
    const [sub1, setSub1] = useState(sub1Grade * sub1Credit);

    const [sub2Grade, setSub2Grade] = useState(10);
    const [sub2Credit, setSub2Credit] = useState(3);
    const [sub2, setSub2] = useState(sub2Grade * sub2Credit);

    const [sub3Grade, setSub3Grade] = useState(10);
    const [sub3Credit, setSub3Credit] = useState(10);
    const [sub3, setSub3] = useState(sub3Grade * sub3Credit);

    const [result, setResult] = useState(0);

    let [isOpen, setIsOpen] = useState(false)

    const calculateResult = () => {
        const totalCredit = sub1Credit + sub2Credit + sub3Credit ;
        const totalPoints = sub1 + sub2 + sub3 ;

        setResult((totalPoints / totalCredit).toFixed(2));
    }

    const toggleModal = () => {
        calculateResult();
        setIsOpen(!isOpen);
    }

    return (
        <div className="m-5 text-center">
            <h1 className="font-bold text-2xl pt-2">CSE - 8th Semester</h1>
            <div>
                <h1 className="text-2xl font-bold pt-2">Theory</h1>
                <Subject
                    name="Professional Elective IV"
                    credit={sub1Credit}
                    setCredit={setSub1Credit}
                    code=""
                    grade={sub1Grade}
                    setGrade={setSub1Grade}
                    point={sub1}
                    setPoint={setSub1}
                />

                <Subject
                    name="Professional Elective V"
                    credit={sub2Credit}
                    setCredit={setSub2Credit}
                    code=""
                    grade={sub2Grade}
                    setGrade={setSub2Grade}
                    point={sub2}
                    setPoint={setSub2}
                />


                <h1 className="text-2xl font-bold">Labs / Practicals</h1>

                <Subject
                    name="Project Work"
                    credit={sub3Credit}
                    setCredit={setSub3Credit}
                    code="CS8811"
                    grade={sub3Grade}
                    setGrade={setSub3Grade}
                    point={sub3}
                    setPoint={setSub3}
                />

            </div>

            <button
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                onClick={toggleModal}
            >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Calculate
                </span>
            </button>

            <Modal toggleModal={toggleModal} isOpen={isOpen} setIsOpen={setIsOpen} result={result} />
        </div>
    )
}

export default EighthSemCse