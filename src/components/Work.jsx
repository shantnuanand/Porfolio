import React from "react";
import working from "../../public/working.png";

const workData = [
  {
    title: "React JS Application",
    imgSrc: working,
    demoLink: "/",
    codeLink: "/",
  },
  {
    title: "Tailwind CSS Project",
    imgSrc: working,
    demoLink: "/",
    codeLink: "/",
  },
  {
    title: "JavaScript Game",
    imgSrc: working,
    demoLink: "/",
    codeLink: "/",
  },
  {
    title: "HTML & CSS Website",
    imgSrc: working,
    demoLink: "/",
    codeLink: "/",
  },
  {
    title: "Redux Toolkit App",
    imgSrc: working,
    demoLink: "/",
    codeLink: "/",
  },
  {
    title: "Bootstrap Landing Page",
    imgSrc: working,
    demoLink: "/",
    codeLink: "/",
  },
];

const Work = () => {
  return (
    <div name="work" className="w-full md:h-auto bg-super text-normi py-16">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="text-center pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-deep mb-8">
            Works
          </p>
          <p className="py-4 text-lg font-bold">
            Check out some of my recent work.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {workData.map((work, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${work.imgSrc})` }}
              className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-60 relative"
            >
              <div className="opacity-0 group-hover:opacity-80 bg-black bg-opacity-75 absolute inset-0 flex flex-col justify-center items-center rounded-md transition-opacity duration-300">
                <span className="text-xl font-bold text-white tracking-wider text-center">
                  {work.title}
                </span>
                <div className="pt-8 text-center">
                  <a href={work.demoLink}>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-deep font-bold text-lg hover:border border-white hover:bg-super hover:text-white transition-colors duration-300">
                      Demo
                    </button>
                  </a>
                  <a href={work.codeLink}>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-deep font-bold text-lg hover:border border-white hover:bg-super hover:text-white transition-colors duration-300">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
