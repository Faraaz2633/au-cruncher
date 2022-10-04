import React from 'react'
import Accordions from '../../../components/Accordions'


const Sem1IT = () => {
  const data = [
    {
      subjectName: 'MG8591 - PRINCIPLES OF MANAGEMENT', 
        units:[
          {
            chapterName: 'Unit 1 - INTRODUCTION TO MANAGEMENT AND ORGANIZATIONS', 
            content: 'Definition of Management – Science or Art – Manager Vs Entrepreneur - types of managers - managerial roles and skills – Evolution of Management – Scientific, human relations , system and contingency approaches – Types of Business organization - Sole proprietorship, partnership, company-public and private sector enterprises - Organization culture and Environment – Current trends and issues in Management.'
          },
          {
            chapterName: 'Unit 2 - PLANNING',
            content: 'Nature and purpose of planning – planning process – types of planning – objectives – setting objectives – policies – Planning premises – Strategic Management – Planning Tools and Techniques – Decision making steps and process.'
          },
          {
            chapterName: 'Unit 3 - ORGANISING',
            content: 'Nature and purpose – Formal and informal organization – organization chart – organization structure – types – Line and staff authority – departmentalization – delegation of authority – centralization and decentralization – Job Design - Human Resource Management – HR Planning, Recruitment, selection, Training and Development, Performance Management , Career planning and management'
          },
          {
            chapterName: 'Unit 4 -DIRECTING',
            content: 'Foundations of individual and group behaviour – motivation – motivation theories – motivational techniques – job satisfaction – job enrichment – leadership – types and theories of leadership – communication – process of communication – barrier in communication – effective communication – communication and IT.'
          },
          {
            chapterName: 'Unit 5 - CONTROLLING',
            content: 'System and process of controlling – budgetary and non-budgetary control techniques – use of computers and IT in Management control – Productivity problems and management – control and performance – direct and preventive control – reporting.'
          }
        ]
      },
      {
        subjectName: 'CRYPTOGRAPHY AND NETWORK SECURITY',
          units:[
            {
              chapterName: 'Unit 1 -INTRODUCTION ',
              content: 'Security trends - Legal, Ethical and Professional Aspects of Security, Need for Security at Multiple levels, Security Policies - Model of network security – Security attacks, services and mechanisms – OSI security architecture – Classical encryption techniques: substitution techniques, transposition techniques, steganography).- Foundations of modern cryptography: perfect security – information theory – product cryptosystem – cryptanalysis.'
            },
            {
              chapterName: 'Unit 2 -',
              content: ''
            },
            {
              chapterName: 'Unit 3 -',
              content: ''
            },
            {
              chapterName: 'Unit 4 -',
              content: ''
            },
            {
              chapterName: 'Unit 5 -',
              content: ''
            },
          ]
        }, {
          subjectName: 'HS8151–Communicative English',
            units:[
              {
                chapterName: 'Unit 1 -',
                content: ''
              },
              {
                chapterName: 'Unit 2 -',
                content: ''
              },
              {
                chapterName: 'Unit 3 -',
                content: ''
              },
              {
                chapterName: 'Unit 4 -',
                content: ''
              },
              {
                chapterName: 'Unit 5 -',
                content: ''
              },
            ]
          }, {
            subjectName: 'HS8151–Communicative English',
              units:[
                {
                  chapterName: 'Unit 1 -',
                  content: ''
                },
                {
                  chapterName: 'Unit 2 -',
                  content: ''
                },
                {
                  chapterName: 'Unit 3 -',
                  content: ''
                },
                {
                  chapterName: 'Unit 4 -',
                  content: ''
                },
                {
                  chapterName: 'Unit 5 -',
                  content: ''
                },
              ]
            },
            {
              subjectName: 'HS8151–Communicative English',
                units:[
                  {
                    chapterName: 'Unit 1 -',
                    content: ''
                  },
                  {
                    chapterName: 'Unit 2 -',
                    content: ''
                  },
                  {
                    chapterName: 'Unit 3 -',
                    content: ''
                  },
                  {
                    chapterName: 'Unit 4 -',
                    content: ''
                  },
                  {
                    chapterName: 'Unit 5 -',
                    content: ''
                  },
                ]
              },
              {
                subjectName: 'HS8151–Communicative English',
                  units:[
                    {
                      chapterName: 'Unit 1 -',
                      content: ''
                    },
                    {
                      chapterName: 'Unit 2 -',
                      content: ''
                    },
                    {
                      chapterName: 'Unit 3 -',
                      content: ''
                    },
                    {
                      chapterName: 'Unit 4 -',
                      content: ''
                    },
                    {
                      chapterName: 'Unit 5 -',
                      content: ''
                    },
                  ]
                }
  ]
  return (
    <div className="min-h-screen pt-12 m-auto w-[90%]">
        <h1 className="text-xl font-semibold flex justify-center">IT Sem - 1</h1>
        <Accordions data={data} />
    </div>
  )
}

export default Sem1IT