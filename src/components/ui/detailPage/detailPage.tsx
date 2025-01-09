import React from "react";
import {
  FollowCard,
  MusicListCard,
  PlaylistCard,
  TwitterPostCard,
} from "../card";
import {
  FaFacebookF,
  FaInstagram,
  FaSnapchat,
  FaTwitter,
} from "react-icons/fa";
import { MusicPlayer } from "../player";

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

  const recentlyPlayed = [
    {
      album:
        "https://img.freepik.com/free-photo/medium-shot-nigerian-woman-dancing_23-2149029480.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
      artist: "Davido ft Wizkid",
      song: "FEM (remix)",
      playing: true,
    },
    {
      album:
        "https://img.freepik.com/free-photo/medium-shot-nigerian-woman-dancing_23-2149029480.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
      artist: "Davido ft Wizkid",
      song: "A Better Time",
      playing: false,
    },
    {
      album:
        "https://img.freepik.com/free-photo/medium-shot-nigerian-woman-dancing_23-2149029480.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
      artist: "Davido ft Wizkid",
      song: "FEM",
      playing: false,
    },
    {
      album:
        "https://img.freepik.com/free-photo/medium-shot-nigerian-woman-dancing_23-2149029480.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
      artist: "Davido ft Wizkid",
      song: "FEM",
      playing: false,
    },
    {
      album:
        "https://img.freepik.com/free-photo/medium-shot-nigerian-woman-dancing_23-2149029480.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
      artist: "Davido ft Wizkid",
      song: "FEM",
      playing: false,
    },
    {
      album:
        "https://img.freepik.com/free-photo/medium-shot-nigerian-woman-dancing_23-2149029480.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
      artist: "Davido ft Wizkid",
      song: "Crazy Love",
      playing: false,
    },
  ];

  const topListed = [
    {
      sn: 1,
      album:
        "https://img.freepik.com/free-photo/medium-shot-nigerian-woman-dancing_23-2149029480.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
      artist: "Davido ft Wizkid",
      song: "FEM (remix)",
    },
    {
      sn: 2,
      album:
        "https://img.freepik.com/free-photo/medium-shot-nigerian-woman-dancing_23-2149029480.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
      artist: "Davido ft Wizkid",
      song: "A Better Time",
    },
    {
      sn: 3,
      album:
        "https://img.freepik.com/free-photo/medium-shot-nigerian-woman-dancing_23-2149029480.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
      artist: "Davido ft Wizkid",
      song: "FEM",
    },
    {
      sn: 4,
      album:
        "https://img.freepik.com/free-photo/medium-shot-nigerian-woman-dancing_23-2149029480.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
      artist: "Davido ft Wizkid",
      song: "FEM",
    },
    {
      sn: 5,
      album:
        "https://img.freepik.com/free-photo/medium-shot-nigerian-woman-dancing_23-2149029480.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
      artist: "Davido ft Wizkid",
      song: "FEM",
    },
    {
      sn: 6,
      album:
        "https://img.freepik.com/free-photo/medium-shot-nigerian-woman-dancing_23-2149029480.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
      artist: "Davido ft Wizkid",
      song: "Crazy Love",
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
        <div className="divider"></div>
        <section className="artist">
          <div className="head bg-tabsBackground">
            <h4 className="title">Top Album </h4>
          </div>
          {topListed.map((item, index) => (
            <MusicListCard item={[item]} key={index} />
          ))}

          <div className="divider"></div>
        </section>

        <section className="bloggers">
          <div className="head bg-tabsBackground">
            <h4 className="title">Top Playlist</h4>
          </div>

          <div className="playlist">
            {recentlyPlayed.map((item, index) => (
              <PlaylistCard item={[item]} key={index} />
            ))}
          </div>
          <div className="music_player">
            <div className="music_player_inner">
              <MusicPlayer src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetailPage;
