import React from 'react'
import Accordions from '../../../components/Accordions'


const Sem5Cse = () => {
  const data = [
    {
      subjectName: 'MA8551 – Algebra and Number Theory',
        units:[
          {
            chapterName: 'Unit 1 - GROUPS AND RINGS',
            content: 'Groups : Definition — Properties — Homomorphism — Isomorphism — Cyclic groups — Cosets — Lagrange?s theorem. Rings: Definition — Sub rings — Integral domain — Field — Integer modulo n — Ring homomorphism.'
          },
          {
            chapterName: 'Unit 2 - FINITE FIELDS AND POLYNOMIALS',
            content: 'Rings — Polynomial rings — Irreducible polynomials over finite fields — Factorization of polynomials over finite fields.'
          },
          {
            chapterName: 'Unit 3 - DIVISIBILITY THEORY AND CANONICAL DECOMPOSITIONS',
            content: 'Division algorithm — Base — b representations — Number patterns — Prime and composite numbers — GCD — Euclidean algorithm — Fundamental theorem of arithmetic — LCM.'
          },
          {
            chapterName: 'Unit 4 -DIOPHANTINE EQUATIONS AND CONGRUENCES',
            content: 'Linear Diophantine equations — Congruence?s — Linear Congruence?s — Applications: Divisibility tests — Modular exponentiation-Chinese remainder theorem — 2 x 2 linear systems.'
          },
          {
            chapterName: 'Unit 5 -CLASSICAL THEOREMS AND MULTIPLICATIVE FUNCTIONS',
            content: 'Wilson?s theorem — Fermat?s little theorem — Euler?s theorem — Euler?s Phi functions — Tau and Sigma functions.'
          }
        ]
      },
      {
        subjectName: 'EC8691 – Microprocessors and Microcontrollers',
          units:[
            {
              chapterName: 'Unit 1 - THE 8086 MICROPROCESSOR',
              content: 'Introduction to 8086 — Microprocessor architecture — Addressing modes — Instruction set and assembler directives — Assembly language programming — Modular Programming — Linking and Relocation — Stacks — Procedures — Macros — Interrupts and interrupt service routines — Byte and String Manipulation.'
            },
            {
              chapterName: 'Unit 2 - 8086 SYSTEM BUS STRUCTURE ',
              content: '8086 signals — Basic configurations — System bus timing –System design using 8086 — I/O programming — Introduction to Multiprogramming — System Bus Structure — Multiprocessor configurations — Coprocessor, Closely coupled and loosely Coupled configurations — Introduction to advanced processors.'
            },
            {
              chapterName: 'Unit 3 - I/O INTERFACING ',
              content: 'Memory Interfacing and I/O interfacing — Parallel communication interface — Serial communication interface — D/A and A/D Interface — Timer — Keyboard /display controller — Interrupt controller — DMA controller — Programming and applications Case studies: Traffic Light control, LED display , LCD display, Keyboard display interface and Alarm Controller.'
            },
            {
              chapterName: 'Unit 4 - MICROCONTROLLER ',
              content: 'Architecture of 8051 — Special Function Registers(SFRs) — I/O Pins Ports and Circuits — Instruction set — Addressing modes — Assembly language programming.'
            },
            {
              chapterName: 'Unit 5 - INTERFACING MICROCONTROLLER',
              content: 'Programming 8051 Timers — Serial Port Programming — Interrupts Programming — LCD & Keyboard Interfacing — ADC, DAC & Sensor Interfacing — External Memory Interface- Stepper Motor and Waveform generation — Comparison of Microprocessor, Microcontroller, PIC and ARM processors'
            },
          ]
        }, {
          subjectName: 'CS8501 – Theory of Computation',
            units:[
              {
                chapterName: 'Unit 1 - AUTOMATA FUNDAMENTALS',
                content: 'Introduction to formal proof — Additional forms of Proof — Inductive Proofs –Finite Automata — Deterministic Finite Automata — Non-deterministic Finite Automata — Finite Automata with Epsilon Transitions'
              },
              {
                chapterName: 'Unit 2 - REGULAR EXPRESSIONS AND LANGUAGES',
                content: 'Regular Expressions — FA and Regular Expressions — Proving Languages not to be regular — Closure Properties of Regular Languages — Equivalence and Minimization of Automata.'
              },
              {
                chapterName: 'Unit 3 - CONTEXT FREE GRAMMAR AND LANGUAGES',
                content: 'CFG — Parse Trees — Ambiguity in Grammars and Languages — Definition of the Pushdown Automata — Languages of a Pushdown Automata — Equivalence of Pushdown Automata and CFG, Deterministic Pushdown Automata.'
              },
              {
                chapterName: 'Unit 4 - PROPERTIES OF CONTEXT FREE LANGUAGES',
                content: 'Normal Forms for CFG — Pumping Lemma for CFL — Closure Properties of CFL — Turing Machines — Programming Techniques for TM Normal Forms for CFG — Pumping Lemma for CFL — Closure Properties of CFL — Turing Machines — Programming Techniques for TM'
              },
              {
                chapterName: 'Unit 5 - UNDECIDABILITY',
                content: 'Non Recursive Enumerable (RE) Language — Undecidable Problem with RE — Undecidable Problems about TM — Post?s Correspondence Problem, The Class P and NP.'
              },
            ]
          }, {
            subjectName: 'CS8591 – Computer Networks',
              units:[
                {
                  chapterName: 'Unit 1 - INTRODUCTION AND PHYSICAL LAYER',
                  content: 'Networks — Network Types — Protocol Layering — TCP/IP Protocol suite — OSI Model — Physical Layer: Performance — Transmission media — Switching — Circuit-switched Networks — Packet Switching.'
                },
                {
                  chapterName: 'Unit 2 - DATA-LINK LAYER & MEDIA ACCESS ',
                  content: 'Introduction — Link-Layer Addressing — DLC Services — Data-Link Layer Protocols — HDLC — PPP — Media Access Control — Wired LANs: Ethernet — Wireless LANs — Introduction — IEEE 802.11, Bluetooth — Connecting Devices'
                },
                {
                  chapterName: 'Unit 3 - NETWORK LAYER',
                  content: 'Network Layer Services — Packet switching — Performance — IPV4 Addresses — Forwarding of IP Packets — Network Layer Protocols: IP, ICMP v4 — Unicast Routing Algorithms — Protocols — Multicasting Basics — IPV6 Addressing — IPV6 Protocol.'
                },
                {
                  chapterName: 'Unit 4 - TRANSPORT LAYER',
                  content: 'Introduction — Transport Layer Protocols — Services — Port Numbers — User Datagram Protocol — Transmission Control Protocol — SCTP.'
                },
                {
                  chapterName: 'Unit 5 - APPLICATION LAYER',
                  content: 'WWW and HTTP — FTP — Email –Telnet –SSH — DNS — SNMP.'
                },
              ]
            },
            {
              subjectName: 'HS8151–Object Oriented Analysis and Design',
                units:[
                  {
                    chapterName: 'Unit 1 - UNIFIED PROCESS AND USE CASE DIAGRAMS',
                    content: 'Introduction to OOAD with OO Basics — Unified Process — UML diagrams — Use Case –Case study — the Next Gen POS system, Inception -Use case Modelling — Relating Use cases — include, extend and generalization — When to use Use-cases'
                  },
                  {
                    chapterName: 'Unit 2 - STATIC UML DIAGRAMS ',
                    content: 'Class Diagram—- Elaboration — Domain Model — Finding conceptual classes and description classes — Associations — Attributes — Domain model refinement — Finding conceptual class Hierarchies — Aggregation and Composition — Relationship between sequence diagrams and use cases — When to use Class Diagrams'
                  },
                  {
                    chapterName: 'Unit 3 - DYNAMIC AND IMPLEMENTATION UML DIAGRAMS',
                    content: 'Dynamic Diagrams — UML interaction diagrams — System sequence diagram — Collaboration diagram — When to use Communication Diagrams — State machine diagram and Modelling –When to use State Diagrams — Activity diagram — When to use activity diagrams Implementation Diagrams — UML package diagram — When to use package diagrams — Component and Deployment Diagrams — When to use Component and Deployment diagrams'
                  },
                  {
                    chapterName: 'Unit 4 - DESIGN PATTERNS',
                    content: 'GRASP: Designing objects with responsibilities — Creator — Information expert — Low Coupling — High Cohesion — Controller Design Patterns — creational — factory method — structural — Bridge — Adapter — behavioural — Strategy — observer –Applying GoF design patterns — Mapping design to code'
                  },
                  {
                    chapterName: 'Unit 5 - TESTING',
                    content: 'Object Oriented Methodologies — Software Quality Assurance — Impact of object orientation on Testing — Develop Test Cases and Test Plans'
                  },
                ]
              },
              
  ]
  return (
    <div className="min-h-screen pt-12 m-auto w-[90%]">
        <h1 className="text-xl font-semibold flex justify-center">CSE Sem - 5</h1>
        <Accordions data={data} />
    </div>
  )
}

export default Sem5Cse