import React from 'react'
import Accordions from '../../../components/Accordions'

const Sem1Cse = () => {
  const data = [
    {
      subjectName: 'MA8151 - Engineering Mathematics - I',
      units:[
        {
          chapterName: 'Unit 1 - Differential Calculus',
          content: 'Representation of functions — Limit of a function — Continuity — Derivatives — Differentiation rules — Maxima and Minima of functions of one variable.'
        },
        {
          chapterName: 'Unit 2 - Functions of Several Variables',
          content: 'Partial differentiation — Homogeneous functions and Euler?s theorem — Total derivative — Change of variables — Jacobians — Partial differentiation of implicit functions — Taylor?s series for functions of two variables — Maxima and minima of functions of two variables — Lagrange?s method of undetermined multipliers.'
        }
      ]
    },
    {
      subjectName: 'MA8151 - Engineering Mathematics - I',
      units:[
        {
          chapterName: 'Unit 1 - Differential Calculus',
          content: 'Representation of functions — Limit of a function — Continuity — Derivatives — Differentiation rules — Maxima and Minima of functions of one variable.'
        },
        {
          chapterName: 'Unit 2 - Functions of Several Variables',
          content: 'Partial differentiation — Homogeneous functions and Euler?s theorem — Total derivative — Change of variables — Jacobians — Partial differentiation of implicit functions — Taylor?s series for functions of two variables — Maxima and minima of functions of two variables — Lagrange?s method of undetermined multipliers.'
        }
      ]
    }
  ]
  return (
    <div className="min-h-screen pt-12 m-auto w-[90%]">
        <h1>CSE Sem - 1</h1>
        <Accordions data={data} />
    </div>
  )
}

export default Sem1Cse