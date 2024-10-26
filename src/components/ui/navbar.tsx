import React from "react";
import Notice from "./notice";
import { FaceFrownIcon, MusicalNoteIcon } from "@heroicons/react/16/solid";
import { Bars4Icon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const socials = [
    {
      icon: <FaceFrownIcon className="h-4 w-4 text-defaultText" />,
      link: "#",
    },
    {
      icon: <FaceFrownIcon className="h-4 w-4 text-defaultText" />,
      link: "#",
    },
    {
      icon: <FaceFrownIcon className="h-4 w-4 text-defaultText" />,
      link: "#",
    },
  ];

  return (
    <div className="w-[100%]">
      <section className="notice w-full">
        <Notice
          title="Breaking News:"
          message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. A quos culpa doloremque, maiores facilis necessitatibus!"
        />
      </section>

      {/* socials medials */}
      <section className="account-sec">
        <div className="socials">
          <h5>Follow Us:</h5>

          <div className="flex">
            {socials.map((social, index) => (
              <a key={index} href={social.link} className="social-icon">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* logo box */}

        <div className="logo-box">
          <h1>Logo</h1>
        </div>

        {/* account box */}

        <div className="account-box">
          <MusicalNoteIcon className="h-8 w-8 text-defaultText cursor-pointer" />
          <UserCircleIcon className="h-8 w-8 text-defaultText cursor-pointer" />
          <Bars4Icon className="h-8 w-8 text-defaultText cursor-pointer" />
        </div>
      </section>
    </div>
  );
}
