import React from 'react'
import Accordions from '../../../components/Accordions'


const Sem7Cse = () => {
  const data = [
    {
      subjectName: 'MG8591 – PRINCIPLES OF MANAGEMENT',
        units:[
          {
            chapterName: 'Unit 1 - INTRODUCTION TO MANAGEMENT AND ORGANIZATIONS ',
            content: 'Definition of Management – Science or Art – Manager Vs Entrepreneur - types of managers - managerial roles and skills – Evolution of Management – Scientific, human relations , system and contingency approaches – Types of Business organization - Sole proprietorship, partnership, company-public and private sector enterprises - Organization culture and Environment – Current trends and issues in Management'
          },
          {
            chapterName: 'Unit 2 - PLANNING',
            content: 'Nature and purpose of planning – planning process – types of planning – objectives – setting objectives – policies – Planning premises – Strategic Management – Planning Tools and Techniques – Decision making steps and process.'
          },
          {
            chapterName: 'Unit 3 - ORGANISING',
            content: 'Nature and purpose – Formal and informal organization – organization chart – organization structure – types – Line and staff authority – departmentalization – delegation of authority – centralization and decentralization – Job Design - Human Resource Management – HR Planning, Recruitment, selection, Training and Development, Performance Management , Career planning and management '
          },
          {
            chapterName: 'Unit 4 - DIRECTING',
            content: 'Foundations of individual and group behaviour – motivation – motivation theories – motivational techniques – job satisfaction – job enrichment – leadership – types and theories of leadership – communication – process of communication – barrier in communication – effective communication –communication and IT.'
          },
          {
            chapterName: 'Unit 5 - CONTROLLING ',
            content: 'System and process of controlling – budgetary and non-budgetary control techniques – use of computers and IT in Management control – Productivity problems and management – control and performance – direct and preventive control – reporting'
          },
        ]
      },
      {
        subjectName: 'CS8792 - CRYPTOGRAPHY AND NETWORK SECURITY',
          units:[
            {
              chapterName: 'Unit 1 - INTRODUCTION',
              content: 'Security trends - Legal, Ethical and Professional Aspects of Security, Need for Security at Multiple levels, Security Policies - Model of network security – Security attacks, services and mechanisms – OSI security architecture – Classical encryption techniques: substitution techniques, transposition techniques, steganography- Foundations of modern cryptography: perfect security – information theory – product cryptosystem – cryptanalysis.'
            },
            {
              chapterName: 'Unit 2 - SYMMETRIC KEY CRYPTOGRAPHY',
              content: 'MATHEMATICS OF SYMMETRIC KEY CRYPTOGRAPHY: Algebraic structures - Modular arithmetic-Euclid‟s algorithm- Congruence and matrices - Groups, Rings, Fields- Finite fields- SYMMETRIC KEY CIPHERS: SDES – Block cipher Principles of DES – Strength of DES – Differential and linear cryptanalysis - Block cipher design principles – Block cipher mode of operation – Evaluation criteria for AES – Advanced Encryption Standard - RC4 – Key distribution.'
            },
            {
              chapterName: 'Unit 3 - PUBLIC KEY CRYPTOGRAPHY',
              content: 'MATHEMATICS OF ASYMMETRIC KEY CRYPTOGRAPHY: Primes – Primality Testing – Factorization – Euler‘s totient function, Fermat‘s and Euler‘s Theorem - Chinese Remainder Theorem – Exponentiation and logarithm - ASYMMETRIC KEY CIPHERS: RSA cryptosystem – Key distribution – Key management – Diffie Hellman key exchange - ElGamal cryptosystem – Elliptic curve arithmetic-Elliptic curve cryptography. '
            },
            {
              chapterName: 'Unit 4 - MESSAGE AUTHENTICATION AND INTEGRITY',
              content: 'Authentication requirement – Authentication function – MAC – Hash function – Security of hash function and MAC – SHA –Digital signature and authentication protocols – DSS- Entity Authentication: Biometrics, Passwords, Challenge Response protocols- Authentication applications - Kerberos, X.509'
            },
            {
              chapterName: 'Unit 5 - SECURITY PRACTICE AND SYSTEM SECURITY',
              content: 'Electronic Mail security – PGP, S/MIME – IP security – Web Security - SYSTEM SECURITY: Intruders – Malicious software – viruses – Firewalls'
            },
          ]
        }, {
          subjectName: 'CS8791 – CLOUD COMPUTING',
            units:[
              {
                chapterName: 'Unit 1 -  INTRODUCTION',
                content: 'Introduction to Cloud Computing – Definition of Cloud – Evolution of Cloud Computing – Underlying Principles of Parallel and Distributed Computing – Cloud Characteristics – Elasticity in Cloud – On-demand Provisioning.'
              },
              {
                chapterName: 'Unit 2 - CLOUD ENABLING TECHNOLOGIES',
                content: 'Service Oriented Architecture – REST and Systems of Systems – Web Services – PublishSubscribe Model – Basics of Virtualization – Types of Virtualization – Implementation Levels of Virtualization – Virtualization Structures – Tools and Mechanisms – Virtualization of CPU – Memory – I/O Devices –Virtualization Support and Disaster Recovery.'
              },
              {
                chapterName: 'Unit 3 - CLOUD ARCHITECTURE, SERVICES AND STORAGE',
                content: 'Layered Cloud Architecture Design – NIST Cloud Computing Reference Architecture – Public, Private and Hybrid Clouds - laaS – PaaS – SaaS – Architectural Design Challenges – Cloud Storage – Storage-as-a-Service – Advantages of Cloud Storage – Cloud Storage Providers – S3.'
              },
              {
                chapterName: 'Unit 4 - RESOURCE MANAGEMENT AND SECURITY IN CLOUD',
                content: 'Inter Cloud Resource Management – Resource Provisioning and Resource Provisioning Methods – Global Exchange of Cloud Resources – Security Overview – Cloud Security Challenges – Software-as-a-Service Security – Security Governance – Virtual Machine Security – IAM – Security Standards.'
              },
              {
                chapterName: 'Unit 5 - CLOUD TECHNOLOGIES AND ADVANCEMENTS',
                content: 'Hadoop – MapReduce – Virtual Box -- Google App Engine – Programming Environment for Google App Engine –– Open Stack – Federation in the Cloud – Four Levels of Federation – Federated Services and Applications – Future of Federatio'
              },
            ]
          }, {
            subjectName: 'IT8075 – SOFTWARE PROJECT MANAGEMENT',
              units:[
                {
                  chapterName: 'Unit 1 - SOFTWARE PROJECT MANAGEMENT',
                  content: 'Importance of Software Project Management – Activities - Methodologies – Categorization of Software Projects – Setting objectives – Management Principles – Management Control – Project portfolio Management – Cost-benefit evaluation technology – Risk evaluation – Strategic program Management – Stepwise Project Planning. '
                },
                {
                  chapterName: 'Unit 2 - PROJECT LIFE CYCLE AND EFFORT ESTIMATION',
                  content: 'Software process and Process Models – Choice of Process models - Rapid Application development – Agile methods – Dynamic System Development Method – Extreme Programming– Managing interactive processes – Basics of Software estimation – Effort and Cost estimation techniques – COSMIC Full function points - COCOMO II - a Parametric Productivity Model.'
                },
                {
                  chapterName: 'Unit 3 - ACTIVITY PLANNING AND RISK MANAGEMENT',
                  content: 'Objectives of Activity planning – Project schedules – Activities – Sequencing and scheduling – Network Planning models – Formulating Network Model – Forward Pass & Backward Pass techniques – Critical path (CRM) method – Risk identification – Assessment – Risk Planning –Risk Management – – PERT technique – Monte Carlo simulation – Resource Allocation – Creation of critical paths – Cost schedules'
                },
                {
                  chapterName: 'Unit 4 - PROJECT MANAGEMENT AND CONTROL',
                  content: 'Framework for Management and control – Collection of data – Visualizing progress – Cost monitoring – Earned Value Analysis – Prioritizing Monitoring – Project tracking – Change control – Software Configuration Management – Managing contracts – Contract Management'
                },
                {
                  chapterName: 'Unit 5 - STAFFING IN SOFTWARE PROJECTS',
                  content: 'Managing people – Organizational behavior – Best methods of staff selection – Motivation – The Oldham – Hackman job characteristic model – Stress – Health and Safety – Ethical and Professional concerns – Working in teams – Decision making – Organizational structures – Dispersed and Virtual teams – Communications genres – Communication plans – Leadership'
                },
              ]
            },
            {
              subjectName: 'OBM752 - Hospital Management ',
                units:[
                  {
                    chapterName: 'Unit 1 - OVERVIEW OF HOSPITAL ADMINISTRATION',
                    content: 'Distinction between Hospital and Industry, Challenges in Hospital Administration – Hospital Planning- Equipment Planning – Functional Planning'
                  },
                  {
                    chapterName: 'Unit 2 - HUMAN RESOURCE MANAGEMENT IN HOSPITAL',
                    content: 'Principles of HRM – Functions of HRM – Profile of HRD Manager –Human Resource Inventory – Manpower Planning'
                  },
                  {
                    chapterName: 'Unit 3 - RECRUITMENT AND TRAINING',
                    content: 'Different Departments of Hospital, Recruitment, Selection, Training Guidelines – Methods of Training – Evaluation of Training – Leadership grooming and Training, Promotion – Transfer.'
                  },
                  {
                    chapterName: 'Unit 4 - SUPPORTIVE SERVICES',
                    content: 'Medical Records Department – Central Sterilization and Supply Department – Pharmacy – Food Services - Laundry Services.'
                  },
                  {
                    chapterName: 'Unit 5 - COMMUNICATION AND SAFETY ASPECTS IN HOSPITAL',
                    content: 'Purposes – Planning of Communication, Modes of Communication – Telephone, ISDN, Public Address and Piped Music – CCTV.Security – Loss Prevention – Fire Safety – Alarm System – Safety Rules.'
                  },
                ]
              },
              {
                subjectName: 'CS8083 – MULTI-CORE ARCHITECTURES AND PROGRAMMING ',
                  units:[
                    {
                      chapterName: 'Unit 1 - MULTI-CORE PROCESSORS                    ',
                      content: 'Single core to Multi-core architectures – SIMD and MIMD systems – Interconnection networks – Symmetric and Distributed Shared Memory Architectures – Cache coherence – Performance Issues – Parallel program design.'
                    },
                    {
                      chapterName: 'Unit 2 -PARALLEL PROGRAM CHALLENGES   ',
                      content: 'Performance – Scalability – Synchronization and data sharing – Data races – Synchronization primitives (mutexes, locks, semaphores, barriers) – deadlocks and livelocks – communication between threads (condition variables, signals, message queues and pipes).'
                    },
                    {
                      chapterName: 'Unit 3 - SHARED MEMORY PROGRAMMING WITH OpenMP    ',
                      content: 'OpenMP Execution Model – Memory Model – OpenMP Directives – Work-sharing Constructs – Library functions – Handling Data and Functional Parallelism – Handling Loops – Performance Considerations.'
                    },
                    {
                      chapterName: 'Unit 4 -  DISTRIBUTED MEMORY PROGRAMMING WITH MPI             ',
                      content: 'MPI program execution – MPI constructs – libraries – MPI send and receive – Point-to-point and Collective communication – MPI derived datatypes – Performance evaluation'
                    },
                    {
                      chapterName: 'Unit 5 -  PARALLEL PROGRAM DEVELOPMENT  ',
                      content: 'Case studies – n-Body solvers – Tree Search – OpenMP and MPI implementations and comparison.'
                    },
                  ]
                }
  ]
  return (
    <div className="min-h-screen pt-12 m-auto w-[90%]">
        <h1 className="text-xl font-semibold flex justify-center">CSE Sem - 8</h1>
        <Accordions data={data} />
    </div>
  )
}

export default Sem7Cse