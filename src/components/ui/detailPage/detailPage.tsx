import React from "react";
import { FollowCard, TwitterPostCard } from "../card";
import {
  FaFacebookF,
  FaInstagram,
  FaSnapchat,
  FaTwitter,
} from "react-icons/fa";

interface detailPageProps {
  children?: React.ReactNode;
}
const DetailPage: React.FC<detailPageProps> = ({ children }) => {
  const Links = [
    {
      icon: <FaFacebookF size={15} />,
      link: "#",
      color: "#3b5998", // Facebook blue
    },
    {
      icon: <FaTwitter size={15} />,
      link: "#",
      color: "#1DA1F2", // Twitter blue
    },
    {
      icon: <FaInstagram size={15} />,
      link: "#",
      color: "#E1306C", // Instagram gradient pink
    },
    {
      icon: <FaSnapchat size={15} />,
      link: "#",
      color: "#000000", // Snapchat yellow
    },
  ];

  return (
    <div className="detail_cont">
      <div className="details">{children}</div>
      <div className="aob">
        <section className="socials">
          <div className="inner">
            <div className="connect_head">
              <h3>connect with Me</h3>
            </div>

            <div className="links">
              {Links.map((link, idx) => (
                <a
                  href={link.link}
                  key={idx}
                  className="icon"
                  style={{
                    backgroundColor: link.color,
                  }}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="twitter">
          <TwitterPostCard
            className="black"
            post="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa laudantium veritatis blanditiis aliquid officia ratione est earum nihil consequatur ad!"
            datePosted="10 mins"
          />
        </section>

        <section className="follow">
          <FollowCard socialMedia="Facebook" followers={20} />
          <FollowCard socialMedia="Twitter" followers={200} />
          <FollowCard socialMedia="YouTube" followers={39} />
        </section>
      </div>
    </div>
  );
};

export default DetailPage;
