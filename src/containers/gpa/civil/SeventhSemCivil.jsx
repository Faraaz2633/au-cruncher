import React, { useContext, useState } from 'react'
import Modal from '../../../components/Modal';
import Subject from '../../../components/Subject';
import { ResultContext } from '../../../context/Context';

const SeventhSemCivil = () => {
  const [sub1Grade, setSub1Grade] = useState(10);
  const [sub1Credit, setSub1Credit] = useState(3);
  const [sub1, setSub1] = useState(sub1Grade * sub1Credit);

  const [sub2Grade, setSub2Grade] = useState(10);
  const [sub2Credit, setSub2Credit] = useState(3);
  const [sub2, setSub2] = useState(sub2Grade * sub2Credit);

  const [sub3Grade, setSub3Grade] = useState(10);
  const [sub3Credit, setSub3Credit] = useState(4);
  const [sub3, setSub3] = useState(sub3Grade * sub3Credit);

  const [sub4Grade, setSub4Grade] = useState(10);
  const [sub4Credit, setSub4Credit] = useState(3);
  const [sub4, setSub4] = useState(sub4Grade * sub4Credit);

  const [sub5Grade, setSub5Grade] = useState(10);
  const [sub5Credit, setSub5Credit] = useState(3);
  const [sub5, setSub5] = useState(sub5Grade * sub5Credit);

  const [sub6Grade, setSub6Grade] = useState(10);
  const [sub6Credit, setSub6Credit] = useState(2);
  const [sub6, setSub6] = useState(sub6Grade * sub6Credit);

  const [sub7Grade, setSub7Grade] = useState(10);
  const [sub7Credit, setSub7Credit] = useState(2);
  const [sub7, setSub7] = useState(sub7Grade * sub7Credit);

  const [result, setResult] = useState(0);

  let [isOpen, setIsOpen] = useState(false)

  const calculateResult = () => {
      const totalCredit = sub1Credit + sub2Credit + sub3Credit + sub4Credit + sub5Credit + sub6Credit + sub7Credit ;
      const totalPoints = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 ;

      setResult((totalPoints / totalCredit).toFixed(2));
  }

  const toggleModal = () => {
      calculateResult();
      setIsOpen(!isOpen);
  }

  return (
      <div className="m-5 pt-4 text-center">
          <h1 className="font-bold text-2xl pt-2">Civil - 7th Semester</h1>
          <div>
              <h1 className="text-2xl font-bold pt-2">Theory</h1>
              <Subject
                  name="Estimation, Costing and Valuation Engineering"
                  credit={sub1Credit}
                  setCredit={setSub1Credit}
                  code="CE8701"
                  grade={sub1Grade}
                  setGrade={setSub1Grade}
                  point={sub1}
                  setPoint={setSub1}
              />

              <Subject
                  name="Railways, Airports, Docks and Harbour Engineering"
                  credit={sub2Credit}
                  setCredit={setSub2Credit}
                  code="CE8702"
                  grade={sub2Grade}
                  setGrade={setSub2Grade}
                  point={sub2}
                  setPoint={setSub2}
              />

              <Subject
                  name="Structural Design and Drawing"
                  credit={sub3Credit}
                  setCredit={setSub3Credit}
                  code="CE8703"
                  grade={sub3Grade}
                  setGrade={setSub3Grade}
                  point={sub3}
                  setPoint={setSub3}
              />

              <Subject
                  name="Professional Elective III"
                  credit={sub4Credit}
                  setCredit={setSub4Credit}
                  code=""
                  grade={sub4Grade}
                  setGrade={setSub4Grade}
                  point={sub4}
                  setPoint={setSub4}
              />

              <Subject
                  name="Open Elective II"
                  credit={sub5Credit}
                  setCredit={setSub5Credit}
                  code=""
                  grade={sub5Grade}
                  setGrade={setSub5Grade}
                  point={sub5}
                  setPoint={setSub5}
              />

              

              <h1 className="text-2xl font-bold">Labs / Practicals</h1>

              <Subject
                  name="Creative and Innovative Project(Activity Based - Subject Related)"
                  credit={sub6Credit}
                  setCredit={setSub6Credit}
                  code="CE8711"
                  grade={sub6Grade}
                  setGrade={setSub6Grade}
                  point={sub6}
                  setPoint={setSub6}
              />

              <Subject
                  name="Industrial Training(4 weeks During VI Semester – Summer)"
                  credit={sub7Credit}
                  setCredit={setSub7Credit}
                  code="CE8712"
                  grade={sub7Grade}
                  setGrade={setSub7Grade}
                  point={sub7}
                  setPoint={setSub7}
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

export default SeventhSemCivil