import React from "react";
import {
  AlbumCarousel,
  Carousel,
  EventCarousel,
} from "../components/ui/carousel";
import {
  BlogCard,
  CollectionCard,
  MusicListCard,
  PlaylistCard,
  PopTopCard,
  TwitterPostCard,
  UpdateCard,
} from "../components/ui/card";
import { MusicalNoteIcon } from "@heroicons/react/16/solid";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import { FaSliders } from "react-icons/fa6";
import Player from "../components/ui/player";
import {
  FaFacebookF,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const home = () => {
  const popCards = [
    {
      album: "Twice As Tall",
      artist: "BurnaBoy",
      tops: 10,
      cover:
        "https://img.freepik.com/premium-photo/outdoors-person-playing-decorated-drum-picture_853163-38235.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
      posted: "20/02/23",
      songs: ["All my life", "Lonely at the top", "On God"],
    },
    {
      album: "Twice As Tall",
      artist: "BurnaBoy",
      tops: 20,
      cover:
        "https://img.freepik.com/premium-photo/outdoors-person-playing-decorated-drum-picture_853163-38235.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
      posted: "20/02/23",
      songs: ["All my life", "Lonely at the top", "On God (remix)"],
    },
    {
      album: "Twice As Tall",
      artist: "BurnaBoy",
      tops: 30,
      cover:
        "https://img.freepik.com/premium-photo/outdoors-person-playing-decorated-drum-picture_853163-38235.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
      posted: "20/02/23",
      songs: ["All my life", "Lonely at the top", "On God"],
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
      sn: 3,
      album:
        "https://img.freepik.com/free-photo/medium-shot-nigerian-woman-dancing_23-2149029480.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
      artist: "Davido ft Wizkid",
      song: "FEM",
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
      song: "Crazy Love",
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

  const socials = [
    {
      icon: <FaFacebookF size={17} />,
      link: "#",
      color: "bg-blue-500",
    },
    {
      icon: <BsTwitterX size={17} />,
      link: "#",
      color: "bg-black",
    },
    {
      icon: <FaInstagram size={17} />,
      link: "#",
      color: "bg-pink-500",
    },

    {
      icon: <FaSnapchat size={17} />,
      link: "#",
      color: "bg-yellow-500",
    },
    {
      icon: <FaTiktok size={17} />,
      link: "#",
      color: "bg-black",
    },
    {
      icon: <FaYoutube size={17} />,
      link: "#",
      color: "bg-red-500",
    },
  ];
  return (
    <div className="home_cont w-full">
      <Carousel
        item={[
          {
            image:
              "https://img.freepik.com/premium-photo/marn-grook-player-traditional-aboriginal-attire_419341-185661.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
            title: "OUR LATEST EVENT  IS READY NOW!",
            album: "Twice As Tall",
            likes: 0,
            track: 0,
            artist: "BurnaBoy",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione excepturi accusantium, aperiam praesentium minus voluptatibus doloremque sequi consectetur! Libero, eaque?",
          },
          {
            image:
              "https://img.freepik.com/free-photo/photorealistic-portrait-african-rastafarian-woman-with-dreads_23-2151516463.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
            title: "OUR LATEST MUSICS  IS READY NOW!",
            artist: "BurnaBoy",
            likes: 4,
            track: 21,
            album: "Twice As Tall",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione excepturi accusantium, aperiam praesentium minus voluptatibus doloremque sequi consectetur! Libero, eaque?",
          },
          {
            image:
              "https://img.freepik.com/free-photo/man-playing-instrument-international-jazz-day_23-2148927519.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
            title: "OUR LATEST VIDEOS  IS READY NOW!",
            artist: "BurnaBoy",
            likes: 7,
            track: 21,
            album: "Twice As Tall",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione excepturi accusantium, aperiam praesentium minus voluptatibus doloremque sequi consectetur! Libero, eaque?",
          },
        ]}
      />

      <section className="updates ">
        <UpdateCard
          title="The Top 50"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus aliquam, deleniti inventore ducimus placeat perspiciatis officiis suscipit quidem assumenda?"
          icon={<MusicalNoteIcon width="100" />}
          type="Traditional Music"
          image="https://img.freepik.com/free-photo/man-playing-instrument-international-jazz-day_23-2148927517.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid"
        />
        <UpdateCard
          title="Best OG Vibes"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus aliquam, deleniti inventore ducimus placeat perspiciatis officiis suscipit quidem assumenda?"
          icon={<ListBulletIcon width="100" />}
          type="Vibes in OG ways"
          image="https://img.freepik.com/free-photo/rastafari-movement-with-individual-wearing-dreads_23-2151711947.jpg?t=st=1730742022~exp=1730745622~hmac=f2cf53ba8af22e8a895f3ce80f9d7495349f6b97c325659785c750352c5265e3&w=1800"
        />
        <UpdateCard
          title="Naija Current Jams"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus aliquam, deleniti inventore ducimus placeat perspiciatis officiis suscipit quidem assumenda?"
          icon={<FaSliders size={70} width="100" className="rotate-90" />}
          type="Traditional Music"
          image="https://img.freepik.com/premium-photo/african-drummer-plays-djembe-traditional-musical-instrument_152520-1228.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid"
        />
      </section>

      <section className="musics">
        <div className="flex">
          <div className="col album">
            <div className="head bg-tabsBackground">
              <h4 className="title">Newly Release Albums</h4>
            </div>
            <div className="albums">
              <AlbumCarousel
                item={[
                  {
                    image:
                      "https://img.freepik.com/premium-photo/portrait-man-playing-guitar_1048944-8784999.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                    likes: 10,
                    track: 21,
                    artist: "BurnaBoy",
                    album: "Twice As Tall",
                    title: "Twice As Tall",
                    description:
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione excepturi",
                  },
                  {
                    image:
                      "https://img.freepik.com/premium-photo/renaissance-faire_555695-7984.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                    likes: 10,
                    artist: "BurnaBoy",
                    track: 21,
                    album: "Twice As Tall",
                    title: "A Better Time",
                    description:
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione excepturi",
                  },
                  {
                    image:
                      "https://img.freepik.com/premium-photo/renaissance-faire_555695-7984.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                    likes: 10,
                    artist: "BurnaBoy",
                    track: 21,
                    album: "Twice As Tall",
                    title: "A Better Time",
                    description:
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione excepturi",
                  },
                  {
                    image:
                      "https://img.freepik.com/free-photo/woman-playing-guitar-local-event_23-2149188079.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                    likes: 10,
                    artist: "BurnaBoy",
                    track: 21,
                    album: "Twice As Tall",
                    title: "The Way Too Big",
                    description:
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                  },
                  {
                    image:
                      "https://img.freepik.com/free-photo/smiley-boy-playing-drum_23-2148852743.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                    likes: 10,
                    artist: "BurnaBoy",
                    track: 21,
                    album: "Twice As Tall",
                    title: "Album 1",
                    description: "Lorem ipsum",
                  },
                ]}
              />
            </div>
            <section className="events_section">
              <div className="head bg-tabsBackground">
                <h4 className="title">Upcoming Events</h4>
              </div>

              <div className="events_cont">
                <EventCarousel
                  item={[
                    {
                      event: "AY Live in PH",
                      eventPoster:
                        "https://img.freepik.com/premium-photo/realty-free-images_1023251-235857.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                      eventTime: "12:00 PM",
                      evenDate: "12/12/2021",
                      address: "Port-Harcourt, Nigeria",
                    },
                    {
                      event: "Event 1",
                      eventPoster:
                        "https://img.freepik.com/free-photo/group-colombian-male-friends-spending-time-together-having-fun_23-2151356532.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                      eventTime: "12:00 PM",
                      evenDate: "12/12/2021",
                      address: "Lagos, Nigeria",
                    },
                    {
                      event: "Event 1",
                      eventPoster:
                        "https://img.freepik.com/premium-photo/realty-free-images_1023251-235857.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                      eventTime: "12:00 PM",
                      evenDate: "12/12/2021",
                      address: "Lagos, Nigeria",
                    },
                    {
                      event: "Event 1",
                      eventPoster:
                        "https://img.freepik.com/premium-photo/realty-free-images_1023251-235857.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                      eventTime: "12:00 PM",
                      evenDate: "12/12/2021",
                      address: "Lagos, Nigeria",
                    },
                    {
                      event: "Event 1",
                      eventPoster:
                        "https://img.freepik.com/premium-photo/realty-free-images_1023251-235857.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                      eventTime: "12:00 PM",
                      evenDate: "12/12/2021",
                      address: "Lagos, Nigeria",
                    },
                    {
                      event: "Event 1",
                      eventPoster:
                        "https://img.freepik.com/premium-photo/realty-free-images_1023251-235857.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                      eventTime: "12:00 PM",
                      evenDate: "12/12/2021",
                      address: "Lagos, Nigeria",
                    },
                    {
                      event: "Event 1",
                      eventPoster:
                        "https://img.freepik.com/premium-photo/realty-free-images_1023251-235857.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                      eventTime: "12:00 PM",
                      evenDate: "12/12/2021",
                      address: "Lagos, Nigeria",
                    },
                  ]}
                />
              </div>
            </section>
            <section className="blog_posts">
              <div className="head bg-tabsBackground">
                <h4 className="title">Recent Blog Posts</h4>
              </div>

              <div className="blogs">
                <div className="blogs_inner">
                  <BlogCard
                    title="The Adventure of Kuru"
                    blog_date="31/12/2024"
                    image="https://img.freepik.com/free-vector/flat-africa-day-celebration-illustration_23-2149371069.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid"
                  />
                </div>

                <div className="blogs_inner">
                  <BlogCard
                    title="The orign of Man"
                    blog_date="12/12/2021"
                    image="https://img.freepik.com/free-vector/flat-africa-day-celebration-illustration_23-2149371069.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid"
                  />
                </div>
                <div className="blogs_inner">
                  <BlogCard
                    title="The orign of Man"
                    blog_date="12/12/2021"
                    image="https://img.freepik.com/free-vector/flat-africa-day-celebration-illustration_23-2149371069.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid"
                  />
                </div>
              </div>
            </section>
            <section className="top-musics">
              <div className="head bg-tabsBackground">
                <div className="title">Pop/Top 40</div>
              </div>

              <div className="top-music-datas">
                {popCards.map((item, index) => (
                  <PopTopCard
                    key={index}
                    item={[
                      {
                        album: item.album,
                        artist: item.artist,
                        tops: item.tops,
                        cover: item.cover,
                        posted: item.posted,
                        songs: item.songs,
                        index,
                      },
                    ]}
                  />
                ))}
              </div>
            </section>
          </div>

          <div className="col artist">
            <div className="head bg-tabsBackground">
              <h4 className="title">Top 10 Artists </h4>
            </div>
            <div className="music_list">
              {topListed.map((item, index) => (
                <MusicListCard item={[item]} key={index} />
              ))}
            </div>
            <div className="divider"></div>
            <div className="head bg-tabsBackground">
              <div className="title">Top Playlist</div>
            </div>
            <div className="playlist">
              {recentlyPlayed.map((item, index) => (
                <PlaylistCard item={[item]} key={index} />
              ))}
            </div>
            <div className="music_player">
              <div className="music_player_inner">
                <Player src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
              </div>
            </div>

            <section className="connect">
              <div className="head bg-tabsBackground">
                <h4 className="title">Get Connected</h4>
              </div>

              <div className="link">
                {socials.map((social, index) => (
                  <div key={index} className={`icon ${social.color}`}>
                    <a href={social.link}>{social.icon}</a>
                  </div>
                ))}
              </div>

              <div className="divider"></div>

              <div className="section_twit">
                <TwitterPostCard
                  post="                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus minima, omnis cumque deserunt ipsa fugit similique cupiditate quidem? Consequatur debitis suscipit impedit velit reiciendis tenetur.
"
                  datePosted="2024"
                />
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="media_blogs">
        <div className="flex media_blog_cont">
          <div className="musics_blogs">
            <div className="head">
              <h3 className="title">Music Soul</h3>
            </div>

            <div className="blogs_cont">
              <CollectionCard
                item={[
                  {
                    bannerText: "All Red Carpet Look 2018 Music Award",
                    bannerImg:
                      "https://img.freepik.com/premium-photo/outdoors-person-playing-decorated-drum-picture_853163-38235.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                    collectionDate: "11 November, 2024",
                    collectionAuthor: "Luiz James",
                    blogs: [
                      {
                        title: "Dolly Parton duets with Wizkid",
                        img: "https://img.freepik.com/free-photo/close-up-traditional-dancers-nigeria_23-2149029512.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                        blog_date: "11/11/2025",
                      },
                      {
                        title: "Dolly Parton duets with Wizkid",
                        img: "https://img.freepik.com/free-photo/close-up-traditional-dancers-nigeria_23-2149029512.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                        blog_date: "11/11/2025",
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
          <div className="musics_blogs">
            <div className="head">
              <h3 className="title">Live Concert</h3>
            </div>

            <div className="blogs_cont">
              <CollectionCard
                item={[
                  {
                    bannerText: "All Red Carpet Look 2018 Music Award",
                    bannerImg:
                      "https://img.freepik.com/premium-photo/outdoors-person-playing-decorated-drum-picture_853163-38235.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                    collectionDate: "11 November, 2024",
                    collectionAuthor: "Luiz James",
                    blogs: [
                      {
                        title: "Dolly Parton duets with Wizkid",
                        img: "https://img.freepik.com/free-photo/close-up-traditional-dancers-nigeria_23-2149029512.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                        blog_date: "11/11/2025",
                      },
                      {
                        title: "Dolly Parton duets with Wizkid",
                        img: "https://img.freepik.com/free-photo/close-up-traditional-dancers-nigeria_23-2149029512.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                        blog_date: "11/11/2025",
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
          <div className="musics_blogs">
            <div className="head">
              <h3 className="title">New Albums</h3>
            </div>

            <div className="blogs_cont">
              <CollectionCard
                item={[
                  {
                    bannerText: "All Red Carpet Look 2018 Music Award",
                    bannerImg:
                      "https://img.freepik.com/premium-photo/outdoors-person-playing-decorated-drum-picture_853163-38235.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                    collectionDate: "11 November, 2024",
                    collectionAuthor: "Luiz James",
                    blogs: [
                      {
                        title: "Dolly Parton duets with Wizkid",
                        img: "https://img.freepik.com/free-photo/close-up-traditional-dancers-nigeria_23-2149029512.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                        blog_date: "11/11/2025",
                      },
                      {
                        title: "Dolly Parton duets with Wizkid",
                        img: "https://img.freepik.com/free-photo/close-up-traditional-dancers-nigeria_23-2149029512.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                        blog_date: "11/11/2025",
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
