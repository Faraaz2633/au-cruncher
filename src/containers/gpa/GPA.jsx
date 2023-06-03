import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { gpaRoutesData } from "../../data/gpaRoutesData";

const GPA = () => {
  return (
    <div className="min-h-screen pt-12 w-[90%] m-auto">
      <Helmet>
        <title>
          AU Cruncher: GPA Calculator for Anna University Students
        </title>
        <meta
          name="title"
          content="AU Cruncher GPA Calculator: Effortless Grade Point Average Calculation"
        />
        <meta
          name="description"
          content="Effortlessly calculate your GPA with the AU Cruncher GPA Calculator, tailored for Anna University students. Simplify the process of determining your Grade Point Average and gain valuable insights into your academic performance. Achieve academic excellence and make informed decisions about your educational goals using our user-friendly tool. Join AU Cruncher today and unlock a hassle-free way to calculate your GPA, customized for Anna University students."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aucruncher.vercel.app/gpa" />
        <meta
          property="og:title"
          content="AU Cruncher GPA Calculator: Effortless Grade Point Average Calculation"
        />
        <meta
          property="og:description"
          content="Effortlessly calculate your GPA with the AU Cruncher GPA Calculator, tailored for Anna University students. Simplify the process of determining your Grade Point Average and gain valuable insights into your academic performance. Achieve academic excellence and make informed decisions about your educational goals using our user-friendly tool. Join AU Cruncher today and unlock a hassle-free way to calculate your GPA, customized for Anna University students."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/vqqw9HN/image.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://aucruncher.vercel.app/gpa" />
        <meta
          name="twitter:title"
          content="AU Cruncher GPA Calculator: Effortless Grade Point Average Calculation"
        />
        <meta
          name="twitter:description"
          content="Effortlessly calculate your GPA with the AU Cruncher GPA Calculator, tailored for Anna University students. Simplify the process of determining your Grade Point Average and gain valuable insights into your academic performance. Achieve academic excellence and make informed decisions about your educational goals using our user-friendly tool. Join AU Cruncher today and unlock a hassle-free way to calculate your GPA, customized for Anna University students."
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/vqqw9HN/image.png"
        />
      </Helmet>
      <h2 className="font-bold text-2xl flex justify-center">GPA Calculator</h2>
      <div className="m-auto grid items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4 App">
        {gpaRoutesData.map((data) => (
          <Link
            key={data.name}
            to={data.to}
            className="block transition ease-in-out duration-300 text-[#9ba4b4] hover:text-white p-6 max-w-sm m-auto w-[15rem] h-[10rem] items-center rounded-lg shadow-md  bg-[#21222D] border-transparent border-4 hover:border-[#0689FF] hover:bg-[#24262f]"
          >
            <h5 className="mb-2 text-2xl font-bold ">{data.name}</h5>
            <p className="font-normal">{data.expansion}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GPA;
