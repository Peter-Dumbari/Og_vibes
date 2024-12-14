import React from "react";
import Wrapper from "../components/ui/wrapper";
import {
  FaFacebookF,
  FaInstagram,
  FaQuoteRight,
  FaSnapchat,
  FaThumbsUp,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { BiMessageAlt } from "react-icons/bi";
import {
  BlogCard,
  BlogPosterCard,
  CommentCard,
  FollowCard,
  MiniCollection,
  MusicListCard,
  PlaylistCard,
  TwitterPostCard,
} from "../components/ui/card";
import { CommentInputField } from "../components/ui/inputComponent";
import { MusicPlayer, VideoPlayer } from "../components/ui/player";

const Vid_Detail = () => {
  const dummyComments = [
    {
      author: {
        profile:
          "https://img.freepik.com/free-photo/man-blows-cheeks-has-discontent-expression-being-dissatisfied-with-something_273609-17085.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
        name: "Joe Lio",
      },
      comment:
        "This is extremely cool, but i think you have to be careful with your words",
      commendDate: "30-11-2024",

      reply: [
        {
          author: {
            profile:
              "https://img.freepik.com/free-photo/man-blows-cheeks-has-discontent-expression-being-dissatisfied-with-something_273609-17085.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
            name: "Brain Deo",
          },
          comment: "Baba mind your business, wetin him talk no dey wrong",
          commentDate: "30-11-2024",

          reply: [],
        },
      ],
    },
  ];

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
    {
      icon: <FaTiktok size={15} />,
      link: "#",
      color: "#010101", // TikTok black
    },
    {
      icon: <FaYoutube size={15} />,
      link: "#",
      color: "#FF0000", // YouTube red
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
    <div className="blog_detail_container">
      <div className="banner">
        <h3>Your Daily Dose of Knowledge and Inspiration</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          possimus ipsam optio, veniam quas alias dignissimos blanditiis aliquam
          sed quibusdam.
        </p>
      </div>

      <div className="vid_detail_cont">
        <div className="vid_detail">
          <Wrapper>
            <div className="inner">
              <div className="vidbox_container">
                <VideoPlayer src="https://videos.pexels.com/video-files/3209663/3209663-sd_640_360_25fps.mp4" />
              </div>
              <div className="recentPosts">
                <h4 className="title">Recent Post</h4>

                <div className="blogs">
                  <BlogCard
                    title="The Adventure of Kuru"
                    blog_date="31/12/2024"
                    image="https://img.freepik.com/free-vector/flat-africa-day-celebration-illustration_23-2149371069.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid"
                  />
                  <BlogCard
                    title="The Adventure of Kuru"
                    blog_date="31/12/2024"
                    image="https://img.freepik.com/free-vector/flat-africa-day-celebration-illustration_23-2149371069.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid"
                  />
                  <BlogCard
                    title="The Adventure of Kuru"
                    blog_date="31/12/2024"
                    image="https://img.freepik.com/free-vector/flat-africa-day-celebration-illustration_23-2149371069.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid"
                  />
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
        <Wrapper>
          <div className="detail_cont">
            <div className="details">
              <section className="comment_sec">
                <div className="blog_detail_page_header">
                  <span>Comments</span>
                </div>

                <div className="lists">
                  {dummyComments.map((comment, idx) => (
                    <CommentCard
                      author={comment.author}
                      commentDate={comment.commendDate}
                      comment={comment.comment}
                      reply={comment.reply}
                    />
                  ))}
                </div>

                <div className="divider_cont">
                  <div className="divider"></div>
                </div>
              </section>

              <section className="commentform">
                <div className="blog_detail_page_header">
                  <span>Add Your Comments</span>
                </div>

                <form action="" className="comment_form">
                  <div className="field">
                    <CommentInputField
                      placeholder="Full Name"
                      type="text"
                      required
                      name="full_name"
                    />
                  </div>

                  <div className="field">
                    <CommentInputField
                      placeholder="Phone Number"
                      type="number"
                      name="phone_number"
                    />
                  </div>
                  <div className="field">
                    <CommentInputField
                      placeholder="Email Address"
                      type="email"
                      name="email_address"
                      required
                    />
                  </div>
                  <div className="field">
                    <CommentInputField
                      placeholder="Website"
                      type="text"
                      name="website"
                    />
                  </div>

                  <div className="area">
                    <CommentInputField
                      placeholder="Type your comment"
                      type="textarea"
                      name="comment"
                      required
                    />
                  </div>
                  <button className="comment_btn">Send Now</button>
                </form>
              </section>
            </div>

            <div className="aob">
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
        </Wrapper>
      </div>
    </div>
  );
};

export default Vid_Detail;
