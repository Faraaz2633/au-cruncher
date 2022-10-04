import React from 'react'
import Accordions from '../../../components/Accordions'


const Sem7IT = () => {
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
          }, 
  ]
  return (
    <div className="min-h-screen pt-12 m-auto w-[90%]">
        <h1 className="text-xl font-semibold flex justify-center">IT Sem - 7</h1>
        <Accordions data={data} />
    </div>
  )
}

export default Sem7IT