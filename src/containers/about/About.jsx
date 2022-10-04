import React from "react";
// import shri from "./images/shri.webp";
// import { FaGithub } from "react-icons/fa";
// import { BsLinkedin } from "react-icons/bs";

const About = () => {
  return (
    <div className="mt-10 md:mt-16 leading-8 min-h-screen">
      {/*  about site*/}

      <h1 className="text-3xl md:text-4xl text-center font font-semibold">
        About us
      </h1>
      <main className="p-3 md:flex justify-center items-center flex-col">
        <section className="text-[18px] md:text-2xl">
          An Multi purpose app created for Anna University Students, which
          includes
          <ul className="list-disc ml-9">
            <li className="">
              {" "}
              <span className="underline underline-offset-4 decoration-sky-500">
                GPA
              </span>{" "}
              calculator,
            </li>

            <li>
              <span className="underline underline-offset-4 decoration-sky-500">
                CGPA
              </span>{" "}
              calculator,
            </li>

            <li>
              {" "}
              <span className="underline underline-offset-4 decoration-sky-500">
                Attendance
              </span>{" "}
              calculator and
            </li>

            <li>
              It also has all the{" "}
              <span className="underline underline-offset-4 decoration-sky-500">
                syllabus for all the semester with notes
              </span>{" "}
            </li>
          </ul>{" "}
          <br />
        </section>
        {/* <h1 className="text-[18px] md:text-2xl text-center">
          An Multi purpose app created for Anna University Students which
          includes calculating GPA, CGPA and Attendance calculator. It also has
          all the syllabus for all the semester with notes.
        </h1> */}

        {/* contributes  */}
        <section className="mt-7">
          <h1 className="text-3xl md:text-4xl text-center font font-semibold ">
            Our Contributors
          </h1>

          {/* <div className="flex justify-center mt-5 gap-6 flex-wrap ">
            <div
              className="w-[180px] border-2 border-sky-500 h-[190px]
             rounded-md flex flex-col items-center bg-sky-500 group
              transition-all duration-500
            "
            >
              <img
                src={shri}
                alt="sasa"
                className="rounded-md group-hover:opacity-50"
              />
              <ul className="relative -top-[70px] flex gap-7 transition-all duration-200 opacity-0 group-hover:opacity-100">
                <li>
                  <a
                    href="https://github.com/shrix1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="text-3xl hover:text-white text-black " />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/shriprasanna-b-62aab1208/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsLinkedin className="text-3xl hover:text-white text-black" />
                  </a>
                </li>
              </ul>
              <h1 className="p-1 text-[18px] font-semibold -mt-[30px]">
                Shriprasanna
              </h1>
            </div>
          </div> */}
        </section>

        <a href="https://github.com/Faraaz2633/au-cruncher/graphs/contributors">
          <img
            src="https://contrib.rocks/image?repo=Faraaz2633/au-cruncher"
            alt="sasa"
            className="w-[800px] mt-6 md:w-[500px]"
          />
        </a>
      </main>
    </div>
  );
};

export default About;