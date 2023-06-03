import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { syllabusRoutesData } from "../../data/syllabusRoutesData";

const Syllabus = () => {
  return (
    <div className="min-h-screen pt-12 w-[90%] m-auto">
      <Helmet>
        <title>AU Cruncher: Syllabus for Anna University Students</title>
        <meta
          name="title"
          content="AU Cruncher Engineering Syllabus: Comprehensive Resource for Anna University Students"
        />
        <meta
          name="description"
          content="Access the comprehensive engineering syllabus for Anna University students on AU Cruncher. Explore our extensive resource to find detailed syllabus information, empowering you to excel in your engineering studies. Stay ahead with our user-friendly platform, specifically designed to enhance your academic journey. Join AU Cruncher today and unlock a wealth of syllabus resources catered to Anna University students, supporting your pursuit of engineering excellence."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aucruncher.vercel.app/syllabus" />
        <meta
          property="og:title"
          content="AU Cruncher Engineering Syllabus: Comprehensive Resource for Anna University Students"
        />
        <meta
          property="og:description"
          content="Access the comprehensive engineering syllabus for Anna University students on AU Cruncher. Explore our extensive resource to find detailed syllabus information, empowering you to excel in your engineering studies. Stay ahead with our user-friendly platform, specifically designed to enhance your academic journey. Join AU Cruncher today and unlock a wealth of syllabus resources catered to Anna University students, supporting your pursuit of engineering excellence."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/vqqw9HN/image.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://aucruncher.vercel.app/syllabus"
        />
        <meta
          name="twitter:title"
          content="AU Cruncher Engineering Syllabus: Comprehensive Resource for Anna University Students"
        />
        <meta
          name="twitter:description"
          content="Access the comprehensive engineering syllabus for Anna University students on AU Cruncher. Explore our extensive resource to find detailed syllabus information, empowering you to excel in your engineering studies. Stay ahead with our user-friendly platform, specifically designed to enhance your academic journey. Join AU Cruncher today and unlock a wealth of syllabus resources catered to Anna University students, supporting your pursuit of engineering excellence."
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/vqqw9HN/image.png"
        />
      </Helmet>
      <h2 className="font-bold text-2xl flex justify-center">Syllabus</h2>
      <div className="m-auto grid items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4 App">
        {syllabusRoutesData.map((data) => (
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

export default Syllabus;
