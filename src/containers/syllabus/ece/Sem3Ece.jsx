import React from 'react'
import Accordions from '../../../components/Accordions'

const Sem3Ece = () => {
  const data = [
    {
      subjectName: 'MA8352 - LINEAR ALGEBRA AND PARTIAL DIFFERENTIAL EQUATIONS',
        units:[
          {
            chapterName: 'UNIT 1 - VECTOR SPACES',
            content: 'Vector spaces – Subspaces – Linear combinations and linear system of equations – Linear independence and linear dependence – Bases and dimensions.'
          },
          {
            chapterName: 'Unit 2 - LINEAR TRANSFORMATION AND DIAGONALIZATION',
            content: 'Linear transformation - Null spaces and ranges - Dimension theorem - Matrix representation of a linear transformations - Eigenvalues and eigenvectors - Diagonalizability.'
          },
          {
            chapterName: 'Unit 3 - INNER PRODUCT SPACES',
            content: 'Inner product, norms - Gram Schmidt orthogonalization process - Adjoint of linear operations - Least square approximation.'
          },
          {
            chapterName: 'Unit 4 - PARTIAL DIFFERENTIAL EQUATIONS',
            content: 'Formation – Solutions of first order equations – Standard types and equations reducible to standard types – Singular solutions – Lagrange‘s linear equation – Integral surface passing through a given curve – Classification of partial differential equations - Solution of linear equations of higher order with constant coefficients – Linear non-homogeneous partial differential equations.'
          },
          {
            chapterName: 'Unit 5 - FOURIER SERIES SOLUTIONS OF PARTIAL DIFFERENTIAL EQUATIONS',
            content: 'Dirichlet‘s conditions – General Fourier series – Half range sine and cosine series - Method of separation of variables – Solutions of one dimensional wave equation and one-dimensional heat equation – Steady state solution of two-dimensional heat equation – Fourier series solutions in Cartesian coordinates.'
          }
        ]
      },
      {
        subjectName: 'EC8393 – FUNDAMENTALS OF DATA STRUCTURES IN C',
          units:[
            {
              chapterName: 'Unit 1 - C PROGRAMMING BASICS',
              content: 'Structure of a C program – compilation and linking processes – Constants, Variables – Data Types – Expressions using operators in C – Managing Input and Output operations – Decision Making and Branching – Looping statements. Arrays – Initialization – Declaration – One dimensional and Two-dimensional arrays. Strings- String operations – String Arrays. Simple programs- sortingsearching – matrix operations.'
            },
            {
              chapterName: 'Unit 2 - FUNCTIONS, POINTERS, STRUCTURES AND UNIONS',
              content: 'Functions – Pass by value – Pass by reference – Recursion – Pointers - Definition – Initialization –Pointers arithmetic. Structures and unions - definition – Structure within a structure - Union -Programs using structures and Unions – Storage classes, Pre-processor directives.'
            },
            {
              chapterName: 'Unit 3 - LINEAR DATA STRUCTURES',
              content: 'Arrays and its representations – Stacks and Queues – Linked lists – Linked list-based implementation of Stacks and Queues – Evaluation of Expressions – Linked list based polynomial addition.'
            },
            {
              chapterName: 'Unit 4 - NON-LINEAR DATA STRUCTURES',
              content: 'Trees – Binary Trees – Binary tree representation and traversals –Binary Search Trees –Applications of trees. Set representations - Union-Find operations. Graph and its representations –Graph Traversals.'
            },
            {
              chapterName: 'Unit 5 - SEARCHING AND SORTING ALGORITHMS',
              content: 'Linear Search – Binary Search. Bubble Sort, Insertion sort – Merge sort – Quick sort - Hash tables – Overflow handling.'
            },
          ]
        }, {
          subjectName: ' – ',
            units:[
              {
                chapterName: 'Unit 1 - ',
                content: ''
              },
              {
                chapterName: 'Unit 2 - ',
                content: ''
              },
              {
                chapterName: 'Unit 3 - ',
                content: ''
              },
              {
                chapterName: 'Unit 4 - ',
                content: ''
              },
              {
                chapterName: 'Unit 5 - ',
                content: ''
              },
            ]
          }, {
            subjectName: ' – ',
              units:[
                {
                  chapterName: 'Unit 1 - ',
                  content: ''
                },
                {
                  chapterName: 'Unit 2 - ',
                  content: ''
                },
                {
                  chapterName: 'Unit 3 - ',
                  content: ''
                },
                {
                  chapterName: 'Unit 4 - ',
                  content: ''
                },
                {
                  chapterName: 'Unit 5 - ',
                  content: ''
                },
              ]
            },
            {
              subjectName: ' – ',
                units:[
                  {
                    chapterName: 'Unit 1 - ',
                    content: ''
                  },
                  {
                    chapterName: 'Unit 2 - ',
                    content: ''
                  },
                  {
                    chapterName: 'Unit 3 - ',
                    content: ''
                  },
                  {
                    chapterName: 'Unit 4 - ',
                    content: ''
                  },
                  {
                    chapterName: 'Unit 5 - ',
                    content: ''
                  },
                ]
              },
              {
                subjectName: ' – ',
                  units:[
                    {
                      chapterName: 'Unit 1 - ',
                      content: ''
                    },
                    {
                      chapterName: 'Unit 2 - ',
                      content: ''
                    },
                    {
                      chapterName: 'Unit 3 - ',
                      content: ''
                    },
                    {
                      chapterName: 'Unit 4 - ',
                      content: ''
                    },
                    {
                      chapterName: 'Unit 5 - ',
                      content: ''
                    },
                  ]
                }
  ]
  return (
    <div className="min-h-screen pt-12 m-auto w-[90%]">
        <h1 className="text-xl font-semibold flex justify-center">ECE Sem - 3</h1>
        <Accordions data={data} />
    </div>
  )
}

export default Sem3Ece