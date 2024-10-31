import React, { useState } from "react";
import Notice from "./notice";
import { MusicalNoteIcon } from "@heroicons/react/16/solid";
import { Bars3Icon, Bars3CenterLeftIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import Wrapper from "./wrapper";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const socials = [
    {
      icon: <FaFacebookF size={13} />,
      link: "#",
    },
    {
      icon: <FaTwitter size={13} />,
      link: "#",
    },
    {
      icon: <FaInstagram size={13} />,
      link: "#",
    },

    {
      icon: <FaSnapchat size={13} />,
      link: "#",
    },
    {
      icon: <FaTiktok size={13} />,
      link: "#",
    },
    {
      icon: <FaYoutube size={13} />,
      link: "#",
    },
  ];

  const routes = [
    {
      page: "Home",
      link: "/",
    },
    {
      page: "Artist",
      link: "",

      subTabs: [
        {
          page: "Gospel Artist",
          link: "",
        },

        {
          page: "Highlife Artist",
          link: "",
        },
        {
          page: "Circular Artist",
          link: "",
        },
      ],
    },
    {
      page: "Music",
      link: "",

      subTabs: [
        {
          page: "Mixtapes",
          link: "",
        },
        {
          page: "Gospel",
          link: "",
        },
        {
          page: "Circular",
          link: "",
        },
      ],
    },
    {
      page: "Event",
      link: "",
    },
    {
      page: "Blog",
      link: "",

      subTabs: [
        {
          page: "All Blogs",
          link: "",
        },
        {
          page: "Post Blogs",
          link: "",
        },
      ],
    },
    {
      page: "Contact Us",
      link: "",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

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
          <h6>Follow Us:</h6>

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
          <div className="flex gap-5 items-center">
            <MusicalNoteIcon className="h-8 w-8 text-defaultText cursor-pointer" />
            <UserCircleIcon className="h-8 w-8 text-defaultText cursor-pointer" />
          </div>

          <Bars3Icon className="h-8 w-8 text-defaultText cursor-pointer bars" />
        </div>
      </section>

      <section className="tabs">
        <Wrapper>
          <div className="bg-tabsBackground">
            <nav className="flex tab-container dropdown">
              {routes.map((item, index) => {
                return (
                  <div
                    className="relative"
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}>
                    <NavLink to={item.link}>{item.page}</NavLink>

                    {(activeIndex === index ||
                      window.location.pathname === item.link) && (
                      <Bars3CenterLeftIcon className="w-6 h-6 rotate-90 text-primary border-none outline-none absolute top-6 left-[20%]" />
                    )}

                    {activeIndex === index && item.subTabs && (
                      <div className=" dropdown-content dropDown">
                        {item.subTabs.map((subTab, subIndex) => (
                          <div className="item">
                            <NavLink
                              key={subIndex}
                              to={subTab.link}
                              onMouseEnter={() => handleMouseEnter(index)}>
                              {subTab.page}
                            </NavLink>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </Wrapper>
      </section>
    </div>
  );
}
