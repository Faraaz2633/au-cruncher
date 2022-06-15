import React from 'react'
import Accordions from '../../../components/Accordions'


const Sem4IT = () => {
  const data = [
    {
      subjectName: 'MA8391-Probability and Statistics',
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
        subjectName: 'GE8291 – Environmental Science and Engineering',
          units:[
            {
              chapterName: 'Unit 1 - ENVIRONMENT, ECOSYSTEMS AND BIODIVERSITY',
              content: 'GE8291 Definition, scope and importance of environment — need for public awareness — concept of an ecosystem — structure and function of an ecosystem — producers, consumers and decomposers — energy flow in the ecosystem — ecological succession — food chains, food webs and ecological pyramids — Introduction, types, characteristic features, structure and function of the (a) forest ecosystem (b) grassland ecosystem (c) desert ecosystem (d) aquatic ecosystems (ponds, streams, lakes, rivers, oceans, estuaries) — Introduction to biodiversity definition: genetic, species and ecosystem diversity — biogeographical classification of India — value of biodiversity: consumptive use, productive use, social, ethical, aesthetic and option values — Biodiversity at global, national and local levels — India as a mega-diversity nation — hot-spots of biodiversity — threats to biodiversity: habitat loss, poaching of wildlife, man-wildlife conflicts — endangered and endemic species of India — conservation of biodiversity: In-situ and ex-situ conservation of biodiversity. Field study of common plants, insects, birds; Field study of simple ecosystems — pond, river, hill slopes, etc.              '
            },
            {
              chapterName: 'Unit 2 - ENVIRONMENTAL POLLUTION',
              content: 'Definition — causes, effects and control measures of: (a) Air pollution (b) Water pollution (c) Soil pollution (d) Marine pollution (e) Noise pollution (f) Thermal pollution (g) Nuclear hazards — solid waste management: causes, effects and control measures of municipal solid wastes — role of an individual in prevention of pollution — pollution case studies — disaster management: floods, earthquake, cyclone and landslides. Field study of local polluted site — Urban / Rural / Industrial / Agricultural'
            },
            {
              chapterName: 'Unit 3 - NATURAL RESOURCES',
              content: 'Forest resources: Use and over-exploitation, deforestation, case studies- timber extraction, mining, dams and their effects on forests and tribal people — Water resources: Use and over- utilization of surface and ground water, floods, drought, conflicts over water, dams-benefits and problems — Mineral resources: Use and exploitation, environmental effects of extracting and using mineral resources, case studies — Food resources: World food problems, changes caused by agriculture and overgrazing, effects of modern agriculture, fertilizer-pesticide problems, water logging, salinity, case studies — Energy resources: Growing energy needs, renewable and non renewable energy sources, use of alternate energy sources. case studies — Land resources: Land as a resource, land degradation, man induced landslides, soil erosion and desertification — role of an individual in conservation of natural resources — Equitable use of resources for sustainable lifestyles. Field study of local area to document environmental assets — river / forest / grassland / hill / mountain.'
            },
            {
              chapterName: 'Unit 4 - SOCIAL ISSUES AND THE ENVIRONMENT',
              content: 'From unsustainable to sustainable development — urban problems related to energy — water conservation, rain water harvesting, watershed management — resettlement and rehabilitation of people; its problems and concerns, case studies — role of non-governmental organization- environmental ethics: Issues and possible solutions — climate change, global warming, acid rain, ozone layer depletion, nuclear accidents and holocaust, case studies. — wasteland reclamation — consumerism and waste products — environment production act — Air (Prevention and Control of Pollution) act — Water (Prevention and control of Pollution) act — Wildlife protection act — Forest conservation act — enforcement machinery involved in environmental legislation- central and state pollution control boards- Public awareness.'
            },
            {
              chapterName: 'Unit 5 - HUMAN POPULATION AND THE ENVIRONMENT',
              content: 'Population growth, variation among nations — population explosion — family welfare programme — environment and human health — human rights — value education — HIV / AIDS — women and child welfare — role of information technology in environment and human health — Case studies.'
            },
          ]
        }, {
          subjectName: 'CS8451 – Design and Analysis of Algorithms',
            units:[
              {
                chapterName: 'Unit 1 - INTRODUCTION',
                content: 'Notion of an Algorithm — Fundamentals of Algorithmic Problem Solving — Important Problem Types — Fundamentals of the Analysis of Algorithmic Efficiency –Asymptotic Notations and their properties. Analysis Framework — Empirical analysis — Mathematical analysis for Recursive and Non-recursive algorithms — Visualization'
              },
              {
                chapterName: 'Unit 2 - BRUTE FORCE AND DIVIDE-AND-CONQUER ',
                content: 'Brute Force — Computing an — String Matching — Closest-Pair and Convex-Hull Problems — Exhaustive Search — Travelling Salesman Problem — Knapsack Problem — Assignment problem. Divide and Conquer Methodology — Binary Search — Merge sort — Quick sort — Heap Sort — Multiplication of Large Integers — Closest-Pair and Convex — Hull Problems.'
              },
              {
                chapterName: 'Unit 3 - DYNAMIC PROGRAMMING AND GREEDY TECHNIQUE',
                content: 'Dynamic programming — Principle of optimality — Coin changing problem, Computing a Binomial Coefficient — Floyd?s algorithm — Multi stage graph — Optimal Binary Search Trees — Knapsack Problem and Memory functions. Greedy Technique — Container loading problem — Prim?s algorithm and Kruskal?s Algorithm — 0/1 Knapsack problem, Optimal Merge pattern — Huffman Trees.'
              },
              {
                chapterName: 'Unit 4 - ITERATIVE IMPROVEMENT',
                content: 'The Simplex Method — The Maximum-Flow Problem — Maximum Matching in Bipartite Graphs, Stable marriage Problem.'
              },
              {
                chapterName: 'Unit 5 - COPING WITH THE LIMITATIONS OF ALGORITHM POWER',
                content: 'Lower — Bound Arguments — P, NP NP- Complete and NP Hard Problems. Backtracking — n-Queen problem — Hamiltonian Circuit Problem — Subset Sum Problem. Branch and Bound — LIFO Search and FIFO search — Assignment problem — Knapsack Problem — Travelling Salesman Problem — Approximation Algorithms for NP-Hard Problems — Travelling Salesman problem — Knapsack problem.'
              },
            ]
          }, {
            subjectName: 'CS8491 – Computer Architecture',
              units:[
                {
                  chapterName: 'Unit 1 - BASIC STRUCTURE OF A COMPUTER SYSTEM',
                  content: 'Functional Units — Basic Operational Concepts — Performance — Instructions: Language of the Computer — Operations, Operands — Instruction representation — Logical operations — decision making — MIPS Addressing'
                },
                {
                  chapterName: 'Unit 2 - ARITHMETIC FOR COMPUTERS',
                  content: 'Addition and Subtraction — Multiplication — Division — Floating Point Representation — Floating Point Operations — Subword Parallelism'
                },
                {
                  chapterName: 'Unit 3 - PROCESSOR AND CONTROL UNIT',
                  content: 'A Basic MIPS implementation — Building a Datapath — Control Implementation Scheme — Pipelining — Pipelined datapath and control — Handling Data Hazards & Control Hazards — Exceptions.'
                },
                {
                  chapterName: 'Unit 4 - PARALLELISIM',
                  content: 'Parallel processing challenges — Flynn?s classification — SISD, MIMD, SIMD, SPMD, and Vector Architectures — Hardware multithreading — Multi-core processors and other Shared Memory Multiprocessors — Introduction to Graphics Processing Units, Clusters, Warehouse Scale Computers and other Message-Passing Multiprocessors.'
                },
                {
                  chapterName: 'Unit 5 - MEMORY & I/O SYSTEMS ',
                  content: 'Memory Hierarchy — memory technologies — cache memory — measuring and improving cache performance — virtual memory, TLB?s — Accessing I/O Devices — Interrupts — Direct Memory Access — Bus structure — Bus operation — Arbitration — Interface circuits — USB.'
                },
              ]
            },
            {
              subjectName: 'CS8492 – Database Management Systems',
                units:[
                  {
                    chapterName: 'Unit 1 - RELATIONAL DATABASES',
                    content: 'Purpose of Database System — Views of data — Data Models — Database System Architecture — Introduction to relational databases — Relational Model — Keys — Relational Algebra — SQL fundamentals — Advanced SQL features — Embedded SQL– Dynamic SQL'
                  },
                  {
                    chapterName: 'Unit 2 - DATABASE DESIGN',
                    content: 'Entity-Relationship model — E-R Diagrams — Enhanced-ER Model — ER-to-Relational Mapping — Functional Dependencies — Non-loss Decomposition — First, Second, Third Normal Forms, Dependency Preservation — Boyce/Codd Normal Form — Multi-valued Dependencies and Fourth Normal Form — Join Dependencies and Fifth Normal Form'
                  },
                  {
                    chapterName: 'Unit 3 - TRANSACTIONS',
                    content: 'Transaction Concepts — ACID Properties — Schedules — Serializability — Concurrency Control — Need for Concurrency — Locking Protocols — Two Phase Locking — Deadlock — Transaction Recovery — Save Points — Isolation Levels — SQL Facilities for Concurrency and Recovery.'
                  },
                  {
                    chapterName: 'Unit 4 - IMPLEMENTATION TECHNIQUES',
                    content: 'RAID — File Organization — Organization of Records in Files — Indexing and Hashing –Ordered Indices — B+ tree Index Files — B tree Index Files — Static Hashing — Dynamic Hashing — Query Processing Overview — Algorithms for SELECT and JOIN operations — Query optimization using Heuristics and Cost Estimation.'
                  },
                  {
                    chapterName: 'Unit 5 - ADVANCED TOPICS',
                    content: 'Distributed Databases: Architecture, Data Storage, Transaction Processing — Object-based Databases: Object Database Concepts, Object-Relational features, ODMG Object Model, ODL, OQL — XML Databases: XML Hierarchical Model, DTD, XML Schema, XQuery — Information Retrieval: IR Concepts, Retrieval Models, Queries in IR systems.'
                  },
                ]
              },
              {
                subjectName: 'CS8493 – Operating Systems',
                  units:[
                    {
                      chapterName: 'Unit 1 - OPERATING SYSTEM OVERVIEW',
                      content: 'Computer System Overview-Basic Elements, Instruction Execution, Interrupts, Memory Hierarchy, Cache Memory, Direct Memory Access, Multiprocessor and Multicore Organization. Operating system overview-objectives and functions, Evolution of Operating System.- Computer System Organization Operating System Structure and Operations- System Calls, System Programs, OS Generation and System Boot.'
                    },
                    {
                      chapterName: 'Unit 2 - PROCESS MANAGEMENT',
                      content: 'Processes — Process Concept, Process Scheduling, Operations on Processes, Inter-process Communication; CPU Scheduling — Scheduling criteria, Scheduling algorithms, Multiple-processor scheduling, Real time scheduling; Threads- Overview, Multithreading models, Threading issues; Process Synchronization — The critical-section problem, Synchronization hardware, Mutex locks, Semaphores, Classic problems of synchronization, Critical regions, Monitors; Deadlock — System model, Deadlock characterization, Methods for handling deadlocks, Deadlock prevention, Deadlock avoidance, Deadlock detection, Recovery from deadlock.'
                    },
                    {
                      chapterName: 'Unit 3 - STORAGE MANAGEMENT',
                      content: 'Main Memory — Background, Swapping, Contiguous Memory Allocation, Paging, Segmentation, Segmentation with paging, 32 and 64 bit architecture Examples; Virtual Memory — Background, Demand Paging, Page Replacement, Allocation, Thrashing; Allocating Kernel Memory, OS Examples'
                    },
                    {
                      chapterName: 'Unit 4 - FILE SYSTEMS AND I/O SYSTEMS',
                      content: 'Mass Storage system — Overview of Mass Storage Structure, Disk Structure, Disk Scheduling and Management, swap space management; File-System Interface — File concept, Access methods, Directory Structure, Directory organization, File system mounting, File Sharing and Protection; File System Implementation- File System Structure, Directory implementation, Allocation Methods, Free Space Management, Efficiency and Performance, Recovery; I/O Systems — I/O Hardware, Application I/O interface, Kernel I/O subsystem, Streams, Performance.'
                    },
                    {
                      chapterName: 'Unit 5 - CASE STUDY',
                      content: 'Linux System — Design Principles, Kernel Modules, Process Management, Scheduling, Memory Management, Input-Output Management, File System, Inter-process Communication; Mobile OS — iOS and Android — Architecture and SDK Framework, Media Layer, Services Layer, Core OS Layer, File System.'
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

export default Sem4IT