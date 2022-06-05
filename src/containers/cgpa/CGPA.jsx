import React, { useState } from 'react'
import Modal from '../../components/Modal';

const CGPA = () => {

  const [sems, setSems] = useState(8);

  const [result, setResult] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [four, setFour] = useState(0);
  const [five, setFive] = useState(0);
  const [six, setSix] = useState(0);
  const [seven, setSeven] = useState(0);
  const [eight, setEight] = useState(0);

  const handleChange = (e) => {
    setSems(e.target.value)
  }

  const handleChangeInput = (e) => {

    switch (e.target.name) {
      case 'one':
        setOne(e.target.value);
        break;

      case 'two':
        setTwo(e.target.value);
        break;

      case 'three':
        setThree(e.target.value);
        break;

      case 'four':
        setFour(e.target.value);
        break;

      case 'five':
        setFive(e.target.value);
        break;

      case 'six':
        setSix(e.target.value);
        break;

      case 'seven':
        setSeven(e.target.value);
        break;

      case 'eight':
        setEight(e.target.value);
        break;

      default:
        console.log('hi');
        break;
    }
  }

  const calculateResult = () => {
    const totalPoints = Number(one) + Number(two) + Number(three) + Number(four) + Number(five) + Number(six) + Number(seven) + Number(eight);
    console.log(one)
    console.warn(totalPoints)
    setResult((totalPoints / sems).toFixed(2));
  }

  const toggleModal = () => {
    calculateResult();
    setIsOpen(!isOpen);
  }

  const semesters = [
    {
      state: one,
      setState: setOne,
      text: 'Semster 1 GPA',
      name: 'one'
    },
    {
      state: two,
      setState: setTwo,
      text: 'Semster 2 GPA',
      name: 'two'
    },
    {
      state: three,
      setState: setThree,
      text: 'Semster 3 GPA',
      name: 'three'
    },
    {
      state: four,
      setState: setFour,
      text: 'Semster 4 GPA',
      name: 'four'
    },
    {
      state: five,
      setState: setFive,
      text: 'Semster 5 GPA',
      name: 'five'
    },
    {
      state: six,
      setState: setSix,
      text: 'Semster 6 GPA',
      name: 'six'
    },
    {
      state: seven,
      setState: setSeven,
      text: 'Semster 7 GPA',
      name: 'seven'
    },
    {
      state: eight,
      setState: setEight,
      text: 'Semster 8 GPA',
      name: 'eight'
    }
  ]

  return (
    <div className="min-h-screen w-[90%] m-auto pt-12">
      <h2 className="font-bold text-2xl flex justify-center">CGPA Calculator</h2>
      <h4 className="text-xl flex justify-center py-2">Calculate your overall CGPA here</h4>
      <div className="bg-[#21222D] m-5 p-4 shadow-md rounded-lg max-w-xl ml-auto mr-auto">
        <span>No of semesters you have completed - </span>
        <select onChange={handleChange} value={sems} className="bg-[#242C3C] text-white rounded-md outline-none p-2">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
        </select>
      </div>

      <div>{semesters.slice(0, sems).map((semester, i) => (
        <div
          key={i}
          className="bg-[#21222D] m-5 p-4 shadow-md rounded-lg max-w-xl ml-auto mr-auto"
        >
          <span>{semester.text}</span>
          <input
            className="bg-[#242C3C] ml-4 p-2 rounded-md w-16 outline-none"
            type="number"
            name={semester.name}
            value={semester.state}
            onChange={handleChangeInput}
          />
        </div>
      ))}</div>

      <button
        className=" m-auto flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-800"
        onClick={toggleModal}
      >
        <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Calculate
        </span>
      </button>

      <Modal toggleModal={toggleModal} isOpen={isOpen} setIsOpen={setIsOpen} result={result} />

    </div>
  )
}

export default CGPA