import React from 'react'
import Accordions from '../../../components/Accordions'


const Sem8Cse = () => {
  const data = [
    {
      subjectName: 'GE8076-PROFESSIONAL ETHICS  ',
        units:[
          {
            chapterName: 'Unit 1 -HUMAN VALUES       ',
            content: 'Morals, values and Ethics – Integrity – Work ethic – Service learning – Civic virtue – Respect for others – Living peacefully – Caring – Sharing – Honesty – Courage – Valuing time – Cooperation – Commitment – Empathy – Self confidence – Character – Spirituality – Introduction to Yoga and meditation for professional excellence and stress management.'
          },
          {
            chapterName: 'Unit 2 - ENGINEERING ETHICS ',
            content: 'Senses of ‗Engineering Ethics‘ – Variety of moral issues – Types of inquiry – Moral dilemmas – Moral Autonomy – Kohlberg‘s theory – Gilligan‘s theory – Consensus and Controversy – Models of professional roles – Theories about right action – Self-interest – Customs and Religion – Uses of Ethical Theories.'
          },
          {
            chapterName: 'Unit 3 - ENGINEERING AS SOCIAL EXPERIMENTATION    ',
            content: 'Engineering as Experimentation – Engineers as responsible Experimenters – Codes of Ethics – A Balanced Outlook of law'
          },
          {
            chapterName: 'Unit 4 - SAFETY, RESPONSIBILITIES AND RIGHTS  ',
            content: 'Safety and Risk – Assessment of Safety and Risk – Risk Benefit Analysis and Reducing Risk – Respect for Authority – Collective Bargaining – Confidentiality – Conflicts of Interest – Occupational Crime – Professional Rights – Employee Rights – Intellectual Property Rights (IPR) – Discrimination.'
          },
          {
            chapterName: 'Unit 5 - GLOBAL ISSUES    ',
            content: 'Multinational Corporations – Environmental Ethics – Computer Ethics – Weapons Development – Engineers as Managers – Consulting Engineers – Engineers as Expert Witnesses and Advisors – Moral Leadership –Code of Conduct – Corporate Social Responsibility.'
          },
        ]
      },
  
              {
                subjectName: 'CS8080 - INFORMATION RETRIEVAL TECHNIQUES                   ',
                  units:[
                    {
                      chapterName: 'Unit 1 -  INTRODUCTION                             ',
                      content: 'Information Retrieval – Early Developments – The IR Problem – The User‗s Task – Information versus Data Retrieval - The IR System – The Software Architecture of the IR System – The Retrieval and Ranking Processes - The Web – The e-Publishing Era – How the web changed Search – Practical Issues on the Web – How People Search – Search Interfaces Today – Visualization in Search Interfaces.'
                    },
                    {
                      chapterName: 'Unit 2 -   MODELING AND RETRIEVAL EVALUATION     ',
                      content: 'Basic IR Models - Boolean Model - TF-IDF (Term Frequency/Inverse Document Frequency) Weighting - Vector Model – Probabilistic Model – Latent Semantic Indexing Model – Neural Network Model – Retrieval Evaluation – Retrieval Metrics – Precision and Recall – Reference Collection – User-based Evaluation – Relevance Feedback and Query Expansion – Explicit Relevance Feedback.'
                    },
                    {
                      chapterName: 'Unit 3 - TEXT CLASSIFICATION AND CLUSTERING ',
                      content: 'A Characterization of Text Classification – Unsupervised Algorithms: Clustering – Naïve Text Classification – Supervised Algorithms – Decision Tree – k-NN Classifier – SVM Classifier – Feature Selection or Dimensionality Reduction – Evaluation metrics – Accuracy and Error – Organizing the classes – Indexing and Searching – Inverted Indexes – Sequential Searching – Multi-dimensional Indexing.'
                    },
                    {
                      chapterName: 'Unit 4 -  WEB RETRIEVAL AND WEB CRAWLING           ',
                      content: 'The Web – Search Engine Architectures – Cluster based Architecture – Distributed Architectures – Search Engine Ranking – Link based Ranking – Simple Ranking Functions – Learning to Rank – Evaluations -- Search Engine Ranking – Search Engine User Interaction – Browsing – Applications of a Web Crawler – Taxonomy – Architecture and Implementation – Scheduling Algorithms – Evaluation.'
                    },
                    {
                      chapterName: 'Unit 5 -    RECOMMENDER SYSTEM           ',
                      content: 'Recommender Systems Functions – Data and Knowledge Sources – Recommendation Techniques – Basics of Content-based Recommender Systems – High Level Architecture – Advantages and Drawbacks of Content-based Filtering – Collaborative Filtering – Matrix factorization models – Neighborhood models.'
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

export default Sem8Cse