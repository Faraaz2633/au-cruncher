import React from "react";

const About = () => {
  return (
    <div className="mt-10 md:mt-16 leading-8">
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
              calculator and{" "}
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

        {/* contributes  */}

        <section>
          <h1 className="text-3xl md:text-4xl text-center font font-semibold ">
            Our Contributes
          </h1>
          {/* main dev */}
          <div>
            {/* cont div */}
            <div></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
