import React, { useState } from "react";
import Notice from "./notice";
import {
  ChevronRightIcon,
  ChevronUpIcon,
  MusicalNoteIcon,
} from "@heroicons/react/16/solid";
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
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/features/modal/modalSlice";
import Validation from "./validation";

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
      link: "/artist",

      subTabs: [
        {
          page: "Gospel Artist",
          link: "#gospel-artist",
        },

        {
          page: "Highlife Artist",
          link: "#highlife-artist",
        },
        {
          page: "Circular Artist",
          link: "#circular-artist",
        },
      ],
    },
    {
      page: "Media",
      link: "/music",

      subTabs: [
        {
          page: "Mixtapes",
          link: "#mixtapes",
        },
        {
          page: "Gospel",
          link: "#gospel",
        },
        {
          page: "Circular",
          link: "#circular",
        },
        {
          page: "Traditinal",
          link: "#",
        },
        {
          page: "Videos",
          link: "/video",
        },

        {
          page: "Live Shows",
          link: "#shows",
        },
      ],
    },
    {
      page: "Event",
      link: "/event",

      subTabs: [
        {
          page: "Gospel Event",
          link: "#",
        },
        {
          page: "Music Concert",
          link: "#",
        },
        {
          page: "Free Ticket Events",
          link: "#",
        },
      ],
    },
    {
      page: "Blog",
      link: "/blogs",

      subTabs: [
        {
          page: "All Blogs",
          link: "#all-blogs",
        },
        {
          page: "Post Blogs",
          link: "#post-blogs",
        },
      ],
    },
    {
      page: "Contact Us",
      link: "/contact",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileSubTabIndex, setMobileSubTabIndex] = useState<number | null>(
    null
  );
  const [showMobileTab, setShowMobileTab] = useState<boolean>(false);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const handleMobileTabClick = (index: number) => {
    setMobileSubTabIndex(index);
  };

  const handleBackClick = () => {
    setMobileSubTabIndex(null);
  };

  const dispatch = useDispatch();

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
            <UserCircleIcon
              onClick={() =>
                dispatch(
                  openModal({
                    title: "Modal Title",
                    content: <Validation />,
                  })
                )
              }
              className="h-8 w-8 text-defaultText cursor-pointer"
            />
          </div>

          <Bars3Icon
            className=" h-8 w-8 text-defaultText cursor-pointer bars "
            onClick={() => setShowMobileTab(!showMobileTab)}
          />
        </div>
      </section>

      <section className="tabs">
        <Wrapper>
          <div className="bg-tabsBackground">
            <nav className="flex tab-container dropdown">
              {routes.map((item, index) => {
                return (
                  <div
                    className="relative "
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave()}>
                    <NavLink to={item.link}>{item.page}</NavLink>

                    {(activeIndex === index ||
                      window.location.pathname === item.link) && (
                      <Bars3CenterLeftIcon className="w-6 h-6 rotate-90 text-primary border-none outline-none absolute top-6 left-[20%]" />
                    )}

                    {activeIndex === index && item.subTabs && (
                      <div className="dropDown">
                        {item.subTabs.map((subTab, subIndex) => (
                          <div className="item" key={subIndex}>
                            <NavLink
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

      {showMobileTab && (
        <section className="mobile-tab">
          {mobileSubTabIndex === null ? (
            routes.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 relative overflow-hidden">
                <div
                  className="flex links"
                  onClick={() => handleMobileTabClick(index)}>
                  <NavLink className="text-defaultBackground" to={item.link}>
                    {item.page}
                  </NavLink>
                  {item.subTabs && (
                    <ChevronUpIcon className="w-6 h-6 text-defaultBackground rotate-90" />
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col relative overflow-hidden">
              {routes[mobileSubTabIndex].subTabs?.map((subTab, subIndex) => (
                <div key={subIndex} className="flex links">
                  <NavLink
                    className="text-defaultBackground"
                    to={subTab.link || routes[mobileSubTabIndex].link}>
                    {subTab.page}
                  </NavLink>
                </div>
              ))}
              <div className="flex links" onClick={handleBackClick}>
                <span className="text-defaultBackground">Back</span>
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
