import React from "react";

const Home = () => {
  return (
    <section
      id="/"
      name="home"
      className="w-full py-[140px] min-h-auto bg-super"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-normi font-medium text-lg">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-lite">
          Shantnu Anand
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-med">
          I'm a Frontend Developer.
        </h2>
        <p className="py-6 max-w-[700px] font-bold text-med">
          Passionate Web Developer | React Enthusiast | Crafting Seamless User
          Experiences with Tailwind CSS
        </p>
        <div>
          <a
            href="/ShantnuAnand_Resume.pdf"
            target="_blank"
            className="text-lite group inline-flex border-2 px-6 py-2 items-center hover:bg-med hover:border-med font-bold"
          >
            Download Resume
            <span className="group-hover:rotate-90 duration-300">
              <i className="ml-3 ri-arrow-right-fill"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
