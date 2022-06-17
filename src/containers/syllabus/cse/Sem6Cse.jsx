import React from 'react'
import Accordions from '../../../components/Accordions'


const Sem6Cse = () => {
  const data = [
    {
      subjectName: 'CS8651 – Internet Programming',
        units:[
          {
            chapterName: 'Unit 1 - WEBSITE BASICS, HTML 5, CSS 3, WEB 2.0',
            content: 'Web Essentials: Clients, Servers and Communication — The Internet — Basic Internet protocols — World wide web — HTTP Request Message — HTTP Response Message — Web Clients — Web Servers — HTML5 — Tables — Lists — Image — HTML5 control elements — Semantic elements — Drag and Drop — Audio — Video controls — CSS3 — Inline, embedded and external style sheets — Rule cascading — Inheritance — Backgrounds — Border Images — Colors — Shadows — Text — Transformations — Transitions — Animations.'
          },
          {
            chapterName: 'Unit 2 - CLIENT SIDE PROGRAMMING',
            content: 'Java Script: An introduction to JavaScript–JavaScript DOM Model-Date and Objects,-Regular Expressions- Exception Handling-Validation-Built-in objects-Event Handling- DHTML with JavaScript- JSON introduction — Syntax — Function Files — Http Request — SQL.'
          },
          {
            chapterName: 'Unit 3 - SERVER SIDE PROGRAMMING',
            content: 'Servlets: Java Servlet Architecture- Servlet Life Cycle- Form GET and POST actions- Session Handling- Understanding Cookies- Installing and Configuring Apache Tomcat Web Server- DATABASE CONNECTIVITY: JDBC perspectives, JDBC program example — JSP: Understanding Java Server Pages-JSP Standard Tag Library (JSTL)-Creating HTML forms by embedding JSP code.'
          },
          {
            chapterName: 'Unit 4 - PHP and XML',
            content: 'An introduction to PHP: PHP- Using PHP- Variables- Program control- Built-in functions- Form Validation- Regular Expressions — File handling — Cookies — Connecting to Database. XML: Basic XML- Document Type Definition- XML Schema DOM and Presenting XML, XML Parsers and Validation, XSL and XSLT Transformation, News Feed (RSS and ATOM)'
          },
          {
            chapterName: 'Unit 5 - INTRODUCTION TO AJAX and WEB SERVICES ',
            content: 'AJAX: Ajax Client Server Architecture-XML Http Request Object-Call Back Methods; Web Services: Introduction- Java web services Basics — Creating, Publishing, Testing and Describing a Web services (WSDL)-Consuming a web service, Database Driven web service from an application –SOAP.'
          }
        ]
      },
      {
        subjectName: 'IT8076 - Software Testing',
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
          subjectName: 'CS8601 – Mobile Computing',
            units:[
              {
                chapterName: 'Unit 1 - INTRODUCTION ',
                content: 'Introduction to Mobile Computing — Applications of Mobile Computing- Generations of Mobile Communication Technologies- Multiplexing — Spread spectrum -MAC Protocols — SDMA- TDMA- FDMA- CDMA'
              },
              {
                chapterName: 'Unit 2 - MOBILE TELECOMMUNICATION SYSTEM ',
                content: 'Introduction to Cellular Systems — GSM — Services & Architecture — Protocols — Connection Establishment — Frequency Allocation — Routing — Mobility Management — Security — GPRS- UMTS — Architecture — Handover — Security'
              },
              {
                chapterName: 'Unit 3 - MOBILE NETWORK LAYER',
                content: 'Mobile IP — DHCP — AdHoc– Proactive protocol-DSDV, Reactive Routing Protocols — DSR, AODV , Hybrid routing –ZRP, Multicast Routing- ODMRP, Vehicular Ad Hoc networks ( VANET) –MANET Vs VANET — Security.'
              },
              {
                chapterName: 'Unit 4 - MOBILE TRANSPORT AND APPLICATION LAYER ',
                content: 'Mobile TCP– WAP — Architecture — WDP — WTLS — WTP –WSP — WAE — WTA Architecture — WML'
              },
              {
                chapterName: 'Unit 5 - MOBILE PLATFORMS AND APPLICATIONS',
                content: 'Mobile Device Operating Systems — Special Constraints & Requirements — Commercial Mobile Operating Systems — Software Development Kit: iOS, Android, BlackBerry, Windows Phone — MCommerce — Structure — Pros & Cons — Mobile Payment System — Security Issues'
              },
            ]
          },
           {
            subjectName: 'CS8691 – Artificial Intelligence',
              units:[
                {
                  chapterName: 'Unit 1 - INTRODUCTION ',
                  content: 'Introduction–Definition — Future of Artificial Intelligence — Characteristics of Intelligent Agents–Typical Intelligent Agents — Problem Solving Approach to Typical AI problems.'
                },
                {
                  chapterName: 'Unit 2 - PROBLEM SOLVING METHODS',
                  content: 'Problem solving Methods — Search Strategies- Uninformed — Informed — Heuristics — Local Search Algorithms and Optimization Problems — Searching with Partial Observations — Constraint Satisfaction Problems — Constraint Propagation — Backtracking Search — Game Playing — Optimal Decisions in Games — Alpha — Beta Pruning — Stochastic Games'
                },
                {
                  chapterName: 'Unit 3 - KNOWLEDGE REPRESENTATION',
                  content: 'First Order Predicate Logic — Prolog Programming — Unification — Forward Chaining-Backward Chaining — Resolution — Knowledge Representation — Ontological Engineering-Categories and Objects — Events — Mental Events and Mental Objects — Reasoning Systems for Categories —Reasoning with Default Information'
                },
                {
                  chapterName: 'Unit 4 - SOFTWARE AGENTS',
                  content: 'Architecture for Intelligent Agents — Agent communication — Negotiation and Bargaining —Argumentation among Agents — Trust and Reputation in Multi-agent systems.'
                },
                {
                  chapterName: 'Unit 5 - APPLICATIONS',
                  content: 'AI applications — Language Models — Information Retrieval- Information Extraction — Natural Language Processing — Machine Translation — Speech Recognition — Robot — Hardware —Perception — Planning — Moving'
                },
              ]
            },
            {
              subjectName: 'CS8602 – Compiler Design',
                units:[
                  {
                    chapterName: 'Unit 1 - INTRODUCTION TO COMPILERS',
                    content: 'Structure of a compiler — Lexical Analysis — Role of Lexical Analyzer — Input Buffering — Specification of Tokens — Recognition of Tokens — Lex — Finite Automata — Regular Expressions to Automata — Minimizing DFA.                    '
                  },
                  {
                    chapterName: 'Unit 2 - SYNTAX ANALYSIS',
                    content: 'Role of Parser — Grammars — Error Handling — Context-free grammars — Writing a grammar — Top Down Parsing — General Strategies Recursive Descent Parser Predictive Parser-LL(1) Parser-Shift Reduce Parser-LR Parser-LR (0)Item Construction of SLR Parsing Table -Introduction to LALR Parser — Error Handling and Recovery in Syntax Analyzer-YACC.'
                  },
                  {
                    chapterName: 'Unit 3 - INTERMEDIATE CODE GENERATION',
                    content: 'Syntax Directed Definitions, Evaluation Orders for Syntax Directed Definitions, Intermediate Languages: Syntax Tree, Three Address Code, Types and Declarations, Translation of Expressions, Type Checking'
                  },
                  {
                    chapterName: 'Unit 4 - RUN-TIME ENVIRONMENT AND CODE GENERATION',
                    content: 'Storage Organization, Stack Allocation Space, Access to Non-local Data on the Stack, Heap Management — Issues in Code Generation — Design of a simple Code Generator.'
                  },
                  {
                    chapterName: 'Unit 5 - CODE OPTIMIZATION ',
                    content: 'Principal Sources of Optimization — Peep-hole optimization — DAG- Optimization of Basic Blocks-Global Data Flow Analysis — Efficient Data Flow Algorithm.'
                  },
                ]
              },
              {
                subjectName: 'CS8603 – Distributed Systems',
                  units:[
                    {
                      chapterName: 'Unit 1 - INTRODUCTION',
                      content: 'Introduction: Definition –Relation to computer system components –Motivation –Relation to parallel systems — Message-passing systems versus shared memory systems –Primitives for distributed communication –Synchronous versus asynchronous executions –Design issues and challenges. A model of distributed computations: A distributed program –A model of distributed executions –Models of communication networks –Global state — Cuts –Past and future cones of an event –Models of process communications. Logical Time: A framework for a system of logical clocks –Scalar time –Vector time — Physical clock synchronization: NTP.                      '
                    },
                    {
                      chapterName: 'Unit 2 - MESSAGE ORDERING & SNAPSHOTS',
                      content: 'Message ordering and group communication: Message ordering paradigms –Asynchronous execution with synchronous communication –Synchronous program order on an asynchronous system –Group communication — Causal order (CO) — Total order. Global state and snapshot recording algorithms: Introduction –System model and definitions –Snapshot algorithms for FIFO channels'
                    },
                    {
                      chapterName: 'Unit 3 - DISTRIBUTED MUTEX & DEADLOCK ',
                      content: 'Distributed mutual exclusion algorithms: Introduction — Preliminaries — Lamport?s algorithm — Ricart-Agrawala algorithm — Maekawa?s algorithm — Suzuki–Kasami?s broadcast algorithm. Deadlock detection in distributed systems: Introduction — System model — Preliminaries — Models of deadlocks — Knapp?s classification — Algorithms for the single resource model, the AND model and the OR model.'
                    },
                    {
                      chapterName: 'Unit 4 - RECOVERY & CONSENSUS',
                      content: 'Checkpointing and rollback recovery: Introduction — Background and definitions — Issues in failure recovery — Checkpoint-based recovery — Log-based rollback recovery — Coordinated checkpointing algorithm — Algorithm for asynchronous checkpointing and recovery. Consensus and agreement algorithms: Problem definition — Overview of results — Agreement in a failure —free system — Agreement in synchronous systems with failures.'
                    },
                    {
                      chapterName: 'Unit 5 - P2P & DISTRIBUTED SHARED MEMORY',
                      content: 'Peer-to-peer computing and overlay graphs: Introduction — Data indexing and overlays — Chord — Content addressable networks — Tapestry. Distributed shared memory: Abstraction and advantages — Memory consistency models –Shared memory Mutual Exclusion.'
                    },
                    
                  ]
                }
  ]
  return (
    <div className="min-h-screen pt-12 m-auto w-[90%]">
        <h1 className="text-xl font-semibold flex justify-center">CSE Sem - 6</h1>
        <Accordions data={data} />
    </div>
  )
}

export default Sem6Cse