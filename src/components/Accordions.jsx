import React, { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

const Accordions = ({ data }) => {

  const [clicked, setClicked] = useState(false);

  const toggle = i => {
    if (clicked === i) {
      return setClicked(null);
    }
    setClicked(i);
  }

  return (
    <div>{data.map((item, i) => (
        <div key={i} className="border-2 bg-[#21222D] rounded-md border-gray-700 hover:border-[#0689FF] my-2 sm:my-3 md:my-4">
          <div
            onClick={() => toggle(i)}
            className="flex justify-between items-center p-3 sm:p-4 md:p-5 w-full font-medium focus:ring-4 focus:ring-gray-800 text-white"
          >
            <h1 className="font-semibold text-md md:text-xl">{item.subjectName}</h1>
            <span className="cursor-pointer">{clicked === i ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}</span>
          </div>
          {clicked === i && (
            <div className="p-3 sm:p-4 md:p-5 border-t border-gray-700 ">
              {item.units.map((unit, id) => (
                <div key={id} className="pb-4">
                  <h3 className="font-semibold md:text-lg pb-2">{unit.chapterName}</h3>
                  <p>{unit.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
    ))}</div>
  )
}

export default Accordions