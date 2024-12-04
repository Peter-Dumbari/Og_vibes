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
  BlogPosterCard,
  CommentCard,
  FollowCard,
  MiniCollection,
  TwitterPostCard,
} from "../components/ui/card";
import { CommentInputField } from "../components/ui/inputComponent";

const BlogDetail = () => {
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

      <Wrapper>
        <div className="detail_cont">
          <div className="details">
            <div className="main_details">
              <div className="img_cont">
                <img
                  src="https://img.freepik.com/free-photo/medium-shot-nigerian-woman-dancing_23-2149029480.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid"
                  alt="blog image"
                />
                <div className="date">
                  <h5 className="month">Feb</h5>
                  <span className="day">14</span>
                </div>
              </div>
              <div className="text_sec">
                <h3>
                  This year concerts conference create a window for concerts
                  groups
                </h3>

                <div className="reactions">
                  <div className="inner">
                    <FaThumbsUp size={20} />
                    <span>3</span>
                    <h5>Likes</h5>
                  </div>
                  <div className="inner">
                    <BiMessageAlt size={20} />
                    <span>3</span>
                    <h5>Comments</h5>
                  </div>
                </div>
                <div className="blog">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laborum, cumque temporibus corrupti autem in nulla quidem
                    possimus iste, laudantium doloremque necessitatibus eius?
                    Quo ex esse ducimus soluta aliquam? Libero repellendus eum
                    minima fuga numquam, similique quasi placeat iure atque.
                    Fugiat quod ipsum reprehenderit dicta quisquam cumque
                    repellendus nam recusandae cum.
                  </p>

                  <div className="seperator">
                    <FaQuoteRight size={60} className="w-50 h-50 icon" />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Error doloremque quas totam illo non officiis quia vero
                      sequi consequuntur corrupti laboriosam quasi odio sunt
                      sapiente temporibus eaque.
                    </p>

                    <div className="divider_cont">
                      <div className="divider"></div>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nemo maiores voluptatem exercitationem at earum repellat,
                    consectetur labore ex! Sapiente, eveniet!
                  </p>
                </div>
              </div>
            </div>

            <section className="poster_cont">
              <BlogPosterCard
                name="James Lio"
                role="Admin"
                tag="Master Developer"
                bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, accusamus, adipisicing elit. Quas, accusamus."
                profile="https://img.freepik.com/free-photo/man-blows-cheeks-has-discontent-expression-being-dissatisfied-with-something_273609-17085.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid"
              />
            </section>

            <section className="related_art">
              <div className="blog_detail_page_header">
                <span>Related Blogs</span>
              </div>

              <div className="list">
                <MiniCollection
                  image="https://img.freepik.com/free-photo/medium-shot-nigerian-woman-dancing_23-2149029480.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid"
                  title="Tradition is Gradually Erasing"
                  author="Nelson Mandella"
                  blogDate="29 Nov 2024"
                />
                <MiniCollection
                  image="https://img.freepik.com/free-photo/medium-shot-nigerian-woman-dancing_23-2149029480.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid"
                  title="Tradition is Gradually Erasing"
                  author="Nelson Mandella"
                  blogDate="29 Nov 2024"
                />
              </div>

              <div className="divider"></div>
            </section>

            <section className="comment_sec">
              <div className="blog_detail_page_header">
                <span>There are 02 comment For this Blog</span>
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
              <FollowCard socialMedia="Facebook" />
              <FollowCard socialMedia="Twitter" />
              <FollowCard socialMedia="YouTube" />
            </section>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default BlogDetail;
