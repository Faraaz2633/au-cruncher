import React from 'react'
import Accordions from '../../../components/Accordions'


const Sem3Cse = () => {
  const data = [
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
          }
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
        <h1 className="text-xl font-semibold flex justify-center">CSE Sem - 3</h1>
        <Accordions data={data} />
    </div>
  )
}

export default Sem3Cse