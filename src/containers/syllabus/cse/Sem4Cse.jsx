import React from 'react'
import Accordions from '../../../components/Accordions'


const Sem4Cse = () => {
  const data = [
    {
      subjectName: 'MA8402 – Probability and Queueing Theory',
        units:[
          {
            chapterName: 'Unit 1 - PROBABILITY AND RANDOM VARIABLES',
            content: 'Probability — Axioms of probability — Conditional probability — Baye?s theorem — Discrete and continuous random variables — Moments — Moment generating functions — Binomial, Poisson, Geometric, Uniform, Exponential and Normal distributions.'
          },
          {
            chapterName: 'Unit 2 - TWO — DIMENSIONAL RANDOM VARIABLES',
            content: 'oint distributions — Marginal and conditional distributions — Covariance — Correlation and linear regression — Transformation of random variables — Central limit theorem (for independent and identically distributed  of the random variables).'
          },
          {
            chapterName: 'Unit 3 - RANDOM PROCESSES ',
            content: 'Classification — Stationary process — Markov process — Poisson process — Discrete parameter Markov chain — Chapman Kolmogorov equations — Limiting distributions'
          },
          {
            chapterName: 'Unit 4 - QUEUEING MODELS ',
            content: 'Markovian queues — Birth and death processes — Single and multiple server queueing models — Little?s formula — Queues with finite waiting rooms — Queues with impatient customers : Balking and reneging.'
          },
          {
            chapterName: 'Unit 5 - ADVANCED QUEUEING MODELS',
            content: 'Finite source of models — M/G/1 queue — Pollaczek Khinchin formula — M/D/1 and M/EK/1 as special cases — Series queues — Open Jackson networks.'
          }
        ]
      },
      {
        subjectName: 'CS8451 – Design and Analysis of Algorithms ',
          units:[
            {
              chapterName: 'Unit 1 - INTRODUCTION',
              content: 'Notion of an Algorithm — Fundamentals of Algorithmic Problem Solving — Important Problem Types — Fundamentals of the Analysis of Algorithmic Efficiency –Asymptotic Notations and their properties. Analysis Framework — Empirical analysis — Mathematical analysis for Recursive and Non-recursive algorithms — Visualization'
            },
            {
              chapterName: 'Unit 2 - BRUTE FORCE AND DIVIDE-AND-CONQUER',
              content: 'Brute Force — Computing an — String Matching — Closest-Pair and Convex-Hull Problems — Exhaustive Search — Travelling Salesman Problem — Knapsack Problem — Assignment problem. Divide and Conquer Methodology — Binary Search — Merge sort — Quick sort — Heap Sort — Multiplication of Large Integers — Closest-Pair and Convex — Hull Problems.'
            },
            {
              chapterName: 'Unit 3 - DYNAMIC PROGRAMMING AND GREEDY TECHNIQUE ',
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
                chapterName: 'Unit 4 - PARALLELISIM ',
                content: 'Parallel processing challenges — Flynn?s classification — SISD, MIMD, SIMD, SPMD, and Vector Architectures — Hardware multithreading — Multi-core processors and other Shared Memory Multiprocessors — Introduction to Graphics Processing Units, Clusters, Warehouse Scale Computers and other Message-Passing Multiprocessors.'
              },
              {
                chapterName:  'Unit 5 - MEMORY & I/O SYSTEMS ',
                content: 'Memory Hierarchy — memory technologies — cache memory — measuring and improving cache performance — virtual memory, TLB?s — Accessing I/O Devices — Interrupts — Direct Memory Access — Bus structure — Bus operation — Arbitration — Interface circuits — USB.'
              },
            ]
          }, {
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
                  content: 'RAID — File Organization — Organization of Records in Files — Indexing and Hashing –Ordered Indices — B+ tree Index Files — B tree Index Files — Static Hashing — Dynamic Hashing — Query Processing Overview — Algorithms for SELECT and JOIN operations — Query optimization using Heuristics and Cost Estimation'
                },
                {
                  chapterName: 'Unit 5 - ADVANCED TOPICS ',
                  content: 'Distributed Databases: Architecture, Data Storage, Transaction Processing — Object-based Databases: Object Database Concepts, Object-Relational features, ODMG Object Model, ODL, OQL — XML Databases: XML Hierarchical Model, DTD, XML Schema, XQuery — Information Retrieval: IR Concepts, Retrieval Models, Queries in IR systems.'
                },
              ]
            },
            {
              subjectName: 'CS8494 – Software Engineering',
                units:[
                  {
                    chapterName: 'Unit 1 - SOFTWARE PROCESS AND AGILE DEVELOPMENT',
                    content: 'Introduction to Software Engineering, Software Process, Perspective and Specialized Process Models –Introduction to Agility-Agile process-Extreme programming-XP Process.'
                  },
                  {
                    chapterName: 'Unit 2 - REQUIREMENTS ANALYSIS AND SPECIFICATION',
                    content: 'Software Requirements: Functional and Non-Functional, User requirements, System requirements, Software Requirements Document — Requirement Engineering Process: Feasibility Studies, Requirements elicitation and analysis, requirements validation, requirements management-Classical analysis: Structured system Analysis, Petri Nets- Data Dictionary.'
                  },
                  {
                    chapterName: 'Unit 3 - SOFTWARE DESIGN',
                    content: 'Design process — Design Concepts-Design Model– Design Heuristic — Architectural Design -Architectural styles, Architectural Design, Architectural Mapping using Data Flow- User Interface Design: Interface analysis, Interface Design –Component level Design: Designing Class based components, traditional Components.'
                  },
                  {
                    chapterName: 'Unit 4 - TESTING AND MAINTENANCE',
                    content: 'Software testing fundamentals-Internal and external views of Testing-white box testing — basis path testing-control structure testing-black box testing- Regression Testing — Unit Testing — Integration Testing — Validation Testing — System Testing And Debugging –Software Implementation Techniques: Coding practices-Refactoring-Maintenance and Reengineering-BPR model-Reengineering process model-Reverse and Forward Engineering.'
                  },
                  {
                    chapterName: 'Unit 5 - PROJECT MANAGEMENT',
                    content: 'Software Project Management: Estimation — LOC, FP Based Estimation, Make/Buy Decision COCOMO I & II Model — Project Scheduling — Scheduling, Earned Value Analysis Planning — Project Plan, Planning Process, RFP Risk Management — Identification, Projection — Risk Management-Risk Identification-RMMM Plan-CASE TOOLS'
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
                      content: 'Main Memory — Background, Swapping, Contiguous Memory Allocation, Paging, Segmentation, Segmentation with paging, 32 and 64 bit architecture Examples; Virtual Memory — Background, Demand Paging, Page Replacement, Allocation, Thrashing; Allocating Kernel Memory, OS Examples.'
                    },
                    {
                      chapterName: 'Unit 4 - FILE SYSTEMS AND I/O SYSTEMS',
                      content: 'Mass Storage system — Overview of Mass Storage Structure, Disk Structure, Disk Scheduling and Management, swap space management; File-System Interface — File concept, Access methods, Directory Structure, Directory organization, File system mounting, File Sharing and Protection; File System Implementation- File System Structure, Directory implementation, Allocation Methods, Free Space Management, Efficiency and Performance, Recovery; I/O Systems — I/O Hardware, Application I/O interface, Kernel I/O subsystem, Streams, Performance.'
                    },
                    {
                      chapterName: 'Unit 5 - CASE STUDY ',
                      content: 'Linux System — Design Principles, Kernel Modules, Process Management, Scheduling, Memory Management, Input-Output Management, File System, Inter-process Communication; Mobile OS — iOS and Android — Architecture and SDK Framework, Media Layer, Services Layer, Core OS Layer, File System.'
                    },
                  ]
                }
  ]
  return (
    <div className="min-h-screen pt-12 m-auto w-[90%]">
        <h1 className="text-xl font-semibold flex justify-center">CSE Sem - 4</h1>
        <Accordions data={data} />
    </div>
  )
}

export default Sem4Cse