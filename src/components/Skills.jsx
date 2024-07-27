import React from "react";

const skillsData = [
  {
    name: "HTML",
    imgSrc: "/html.png",
  },
  {
    name: "CSS",
    imgSrc: "/css.png",
  },
  {
    name: "JavaScript",
    imgSrc: "/js.png",
  },
  {
    name: "React JS",
    imgSrc: "/react.png",
  },
  {
    name: "Tailwind CSS",
    imgSrc: "/tailwind.png",
  },
  {
    name: "Redux",
    imgSrc: "/redux.png",
  },
  {
    name: "Bootstrap",
    imgSrc: "/boot.png",
  },
  {
    name: "Git & Github",
    imgSrc: "/git.png",
  },
];

const Skills = () => {
  return (
    <div name="skills" className="w-full h-auto bg-super text-normi py-16">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center">
        <div className="text-center">
          <p className="text-4xl font-bold inline border-b-4 border-deep mb-8">
            Skills
          </p>
          <p className="py-4 text-lg font-bold">
            These are the technologies I have worked with.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="border-2 h-[200px] w-[200px] shadow-md hover:scale-105 transition-transform duration-500 rounded-lg p-6 bg-white flex flex-col justify-center items-center"
            >
              <img
                className="mx-auto mb-4 object-cover w-20"
                src={skill.imgSrc}
                alt={`${skill.name} icon`}
              />
              <p className="mt-4 font-bold text-xl">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
