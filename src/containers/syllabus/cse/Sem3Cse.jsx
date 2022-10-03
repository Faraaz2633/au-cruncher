import React from 'react'
import Accordions from '../../../components/Accordions'


const Sem3Cse = () => {
  const data = [
    {
      subjectName: 'MA8351 – Discrete Mathematics',
        units:[
          {
            chapterName: 'Unit 1 - LOGIC AND PROOFS',
            content: 'Propositional logic — Propositional equivalences — Predicates and quantifiers — Nested quantifiers — Rules of inference — Introduction to proofs — Proof methods and strategy.'
          },
          {
            chapterName: 'Unit 2 - COMBINATORICS',
            content: 'Mathematical induction — Strong induction and well ordering — The basics of counting — The pigeonhole principle — Permutations and combinations — Recurrence relations — Solving linear recurrence relations — Generating functions — Inclusion and exclusion principle and its applications'
          },
          {
            chapterName: 'Unit 3 - GRAPHS',
            content: 'Graphs and graph models — Graph terminology and special types of graphs — Matrix representation of graphs and graph isomorphism — Connectivity — Euler and Hamilton paths.'
          },
          {
            chapterName: 'Unit 4 - ALGEBRAIC STRUCTURES ',
            content: 'Algebraic systems — Semi {}groups and monoids — Groups — Subgroups — Homomorphism?s — Normal subgroup and cosets — Lagrange?s theorem — Definitions and examples of Rings and Fields.'
          },
          {
            chapterName: 'Unit 5 - LATTICES AND BOOLEAN ALGEBRA',
            content: 'Partial ordering — Posets — Lattices as posets — Properties of lattices — Lattices as algebraic systems — Sub lattices — Direct product and homomorphism — Some special lattices — Boolean algebra.'
          }
        ]
      },
      {
        subjectName: 'EC8395 – Communication Engineering',
          units:[
            {
              chapterName: 'Unit 1 - ANALOG MODULATION',
              content: 'Amplitude Modulation — AM, DSBSC, SSBSC, VSB — PSD, modulators and demodulators — Angle modulation — PM and FM — PSD, modulators and demodulators — Superheterodyne receivers'
            },
            {
              chapterName: 'Unit 2 - PULSE MODULATIO',
              content: 'Low pass sampling theorem — Quantization — PAM — Line coding — PCM, DPCM, DM, and ADPCM And ADM, Channel Vocoder — Time Division Multiplexing, Frequency Division Multiplexing'
            },
            {
              chapterName: 'Unit 3 - DIGITAL MODULATION AND TRANSMISSION',
              content: 'Phase shift keying — BPSK, DPSK, QPSK — Principles of M-ary signaling M-ary PSK & QAM — Comparison, ISI — Pulse shaping — Duo binary encoding — Cosine filters — Eye pattern, equalizers'
            },
            {
              chapterName: 'Unit 4 - INFORMATION THEORY AND CODING',
              content: 'Measure of information — Entropy — Source coding theorem — Shannon–Fano coding, Huffman Coding, LZ Coding — Channel capacity — Shannon-Hartley law — Shannon?s limit — Error control codes — Cyclic codes, Syndrome calculation — Convolution Coding, Sequential and Viterbi decoding'
            },
            {
              chapterName: 'Unit 5 - SPREAD SPECTRUM AND MULTIPLE ACCESS',
              content: 'PN sequences — properties — m-sequence — DSSS — Processing gain, Jamming — FHSS — Synchronisation and tracking — Multiple Access — FDMA, TDMA, CDMA,'
            },
          ]
        }, 
        {
          subjectName: 'CS8351 – Digital Principles and System Design ',
            units:[
              {
                chapterName: 'Unit 1 - BOOLEAN ALGEBRA AND LOGIC GATES',
                content: 'Number Systems — Arithmetic Operations — Binary Codes- Boolean Algebra and Logic Gates — Theorems and Properties of Boolean Algebra — Boolean Functions — Canonical and Standard Forms — Simplification of Boolean Functions using Karnaugh Map — Logic Gates — NAND and NOR Implementations.'
              },
              {
                chapterName: 'Unit 2 - COMBINATIONAL LOGIC',
                content: 'Combinational Circuits — Analysis and Design Procedures — Binary Adder-Subtractor — Decimal Adder — Binary Multiplier — Magnitude Comparator — Decoders — Encoders — Multiplexers — Introduction to HDL — HDL Models of Combinational circuits.'
              },
              {
                chapterName: 'Unit 3 - SYNCHRONOUS SEQUENTIAL LOGIC',
                content: 'Sequential Circuits — Storage Elements: Latches , Flip-Flops — Analysis of Clocked Sequential Circuits — State Reduction and Assignment — Design Procedure — Registers and Counters — HDL Models of Sequential Circuits.'
              },
              {
                chapterName: 'Unit 4 - ASYNCHRONOUS SEQUENTIAL LOGIC',
                content: 'Analysis and Design of Asynchronous Sequential Circuits — Reduction of State and Flow Tables — Race-free State Assignment — Hazards.'
              },
              {
                chapterName: 'Unit 5 - MEMORY AND PROGRAMMABLE LOGIC ',
                content: 'RAM — Memory Decoding — Error Detection and Correction — ROM — Programmable Logic Array — Programmable Array Logic — Sequential Programmable Devices.'
              },
            ]
          }, {
            subjectName: 'CS8391 – Data Structures',
              units:[
                {
                  chapterName: 'Unit 1 - LINEAR DATA STRUCTURES — LIST',
                  content: 'Abstract Data Types (ADTs) — List ADT — array-based implementation — linked list implementation —-singly linked lists- circularly linked lists- doubly-linked lists — applications of lists –Polynomial Manipulation — All operations (Insertion, Deletion, Merge, Traversal).'
                },
                {
                  chapterName: 'Unit 2 - LINEAR DATA STRUCTURES — STACKS, QUEUES',
                  content: 'Stack ADT — Operations — Applications — Evaluating arithmetic expressions- Conversion of Infix to postfix expression — Queue ADT — Operations — Circular Queue — Priority Queue — deQueue — applications of queues.'
                },
                {
                  chapterName: 'Unit 3 - NON LINEAR DATA STRUCTURES — TREES',
                  content: 'Tree ADT — tree traversals — Binary Tree ADT — expression trees — applications of trees — binary search tree ADT –Threaded Binary Trees- AVL Trees — B-Tree — B+ Tree — Heap — Applications of heap.'
                },
                {
                  chapterName: 'Unit 4 - NON LINEAR DATA STRUCTURES — GRAPHS',
                  content: 'Definition — Representation of Graph — Types of graph — Breadth-first traversal — Depth-first traversal — Topological Sort — Bi-connectivity — Cut vertex — Euler circuits — Applications of graphs.'
                },
                {
                  chapterName: 'Unit 5 - SEARCHING, SORTING AND HASHING TECHNIQUES',
                  content: 'Searching- Linear Search — Binary Search. Sorting — Bubble sort — Selection sort — Insertion sort — Shell sort — Radix sort. Hashing- Hash Functions — Separate Chaining — Open Addressing — Rehashing — Extendible Hashing.'
                },
              ]
            },
            {
              subjectName: 'CS8392 – Object Oriented Programming',
                units:[
                  {
                    chapterName: 'Unit 1 - INTRODUCTION TO OOP AND JAVA FUNDAMENTALS ',
                    content: 'Object Oriented Programming — Abstraction — objects and classes — Encapsulation- Inheritance — Polymorphism- OOP in Java — Characteristics of Java — The Java Environment — Java Source File -Structure — Compilation. Fundamental Programming Structures in Java — Defining classes in Java — constructors, methods -access specifiers — static members -Comments, Data Types, Variables, Operators, Control Flow, Arrays , Packages — JavaDoc comments.'
                  },
                  {
                    chapterName: 'Unit 2 - INHERITANCE AND INTERFACES',
                    content: 'Inheritance — Super classes- sub classes –Protected members — constructors in sub classes- the Object class — abstract classes and methods- final methods and classes — Interfaces — defining an interface, implementing interface, differences between classes and interfaces and extending interfaces — Object cloning -inner classes, Array Lists — Strings'
                  },
                  {
                    chapterName: 'Unit 3 - EXCEPTION HANDLING AND I/O',
                    content: 'Exceptions — exception hierarchy — throwing and catching exceptions — built-in exceptions, creating own exceptions, Stack Trace Elements. Input / Output Basics — Streams — Byte streams and Character streams — Reading and Writing Console — Reading and Writing Files'
                  },
                  {
                    chapterName: 'Unit 4 - MULTITHREADING AND GENERIC PROGRAMMING',
                    content: 'Differences between multi-threading and multitasking, thread life cycle, creating threads, synchronizing threads, Inter-thread communication, daemon threads, thread groups. Generic Programming — Generic classes — generic methods — Bounded Types — Restrictions and Limitations.'
                  },
                  {
                    chapterName: 'Unit 5 - EVENT DRIVEN PROGRAMMING',
                    content: 'Graphics programming — Frame — Components — working with 2D shapes — Using color, fonts, and images — Basics of event handling — event handlers — adapter classes — actions — mouse events — AWT event hierarchy — Introduction to Swing — layout management — Swing Components — Text Fields , Text Areas — Buttons- Check Boxes — Radio Buttons — Lists- choices- Scrollbars — Windows –Menus — Dialog Boxes.'
                  },
                ]
              },
  ]
  return (
    <div className="min-h-screen pt-12 m-auto w-[90%]">
        <h1 className="text-xl font-semibold flex justify-center">CSE Sem - 3</h1>
        <Accordions data={data} />
    </div>
  )
}

export default Sem3Cse