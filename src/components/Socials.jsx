import React from "react";

const Socials = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shantnu-anand-3063771b5/",
      bgColor: "bg-blue-600",
      icon: "ri-linkedin-box-fill",
      gap: "gap-7",
    },
    {
      name: "Github",
      url: "https://github.com/shantnuanand",
      bgColor: "bg-[#333333]",
      icon: "ri-github-fill",
      gap: "gap-[38px]",
    },
    {
      name: "Email",
      url: "https://mail.google.com/mail/u/0/#inbox?compose=new",
      bgColor: "bg-[#6fc2b0]",
      icon: "ri-mail-fill",
      gap: "gap-[50px]",
    },
    {
      name: "Contact",
      url: "/",
      bgColor: "bg-[#565f69]",
      icon: "ri-contacts-book-3-line",
      gap: "gap-[30px]",
    },
  ];
  return (
    <div>
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {socialLinks.map(({ name, url, bgColor, icon, gap }) => (
            <li
              key={name}
              className={`w-[160px] h-[60px] flex justify-center items-center p-3 duration-300 ${bgColor} ${gap} ml-[-100px] hover:ml-[-4px]`}
            >
              <a
                className="text-white text-md font-normal"
                target="/blank"
                href={url}
              >
                {name}
              </a>
              <i className={`${icon} text-white text-3xl`}></i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Socials;
