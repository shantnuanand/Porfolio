import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Work" },
  ];

  return (
    <footer className="bg-normi py-8 text-super">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0 px-12">
            <h2 className="text-xl font-bold mb-2">Shantnu Anand</h2>
            <p className="text-deep font-semibold">
              I'm a Frontend Developer specializing in building exceptional
              digital experiences. Currently, I'm focused on building responsive
              React Web Applications.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0 px-10">
            <h2 className="text-xl font-bold mb-2">Important Links</h2>
            <ul>
              {links.map((link) => (
                <li key={link.id} className="mb-2">
                  <Link
                    to={link.id}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-deep hover:text-med"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-10">
            <h2 className="text-xl font-bold mb-2">Contact Me</h2>
            <form action="#" method="POST" className="text-deep">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-deep rounded-md bg-lite text-super"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-deep rounded-md bg-lite text-super"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-3 py-2 border border-deep rounded-md bg-lite text-super"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-3 py-2 bg-deep text-lite font-bold rounded-md hover:bg-med"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
