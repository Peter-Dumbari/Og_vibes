import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  const socials = [
    {
      icon: <FaFacebookF size={20} />,
      link: "#",
    },
    {
      icon: <FaTwitter size={20} />,
      link: "#",
    },
    {
      icon: <FaInstagram size={20} />,
      link: "#",
    },

    {
      icon: <FaSnapchat size={20} />,
      link: "#",
    },
    {
      icon: <FaTiktok size={20} />,
      link: "#",
    },
    {
      icon: <FaYoutube size={20} />,
      link: "#",
    },
  ];
  return (
    <section>
      <section className="section_footer_banner">
        <img
          src="https://img.freepik.com/premium-photo/man-playing-drums-with-band-background_1153744-23126.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid"
          alt="banner_img"
        />

        <div className="overlay"></div>
      </section>
      <section className="footer_links">
        <div className="inner">
          <div className="logo"></div>
          <div className="social_link flex">
            {socials.map((social, index) => (
              <a key={index} href={social.link} className="social-icon">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
      <div className="footer_foot">
        <div className="reserved">
          <p>© 2024 OgVibes All Right Reserved</p>
        </div>
        <div className="tabs">
          <NavLink to="/">Home</NavLink>
          <NavLink to="">Artist</NavLink>
          <NavLink to="">MP3</NavLink>
          <NavLink to="">Videos</NavLink>
          <NavLink to="">Blogs</NavLink>
        </div>
      </div>
    </section>
  );
}

export default Footer;
