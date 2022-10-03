import React from 'react'
import Accordions from "../../../components/Accordions";

const Sem8Civil = () => {

  const data = [
    {
      subjectName: "Proffessional Elective IV",
      units: [
        {
          chapterName:
            "Professional Elective",
          content:
            " ",
        },
      ],
    },
    {
      subjectName: "Open Elective V",
      units: [
        {
          chapterName: "Open Elective",
          content:
            " ",
        },
      ],
    },
    {
      subjectName: "CE8811 PROJECT WORK",
      units: [
        {
          chapterName: "Main project",
          content:
            " ",
        },
      ],
    },
  ]
  return (
    <div className="min-h-screen pt-12 m-auto w-[90%]">
      <h1 className="text-xl font-semibold flex justify-center">CIVIL Sem - 8</h1>
      <Accordions data={data} />
    </div>
  )
}

export default Sem8Civil