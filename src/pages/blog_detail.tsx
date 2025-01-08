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
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../redux/features/blogs/blogSlice";
import { RootState } from "../redux/store";
import DetailPage from "../components/ui/detailPage/detailPage";

const BlogDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { blogs } = useSelector((state: RootState) => state.blogs);

  React.useEffect(() => {
    try {
      dispatch(getBlog(id));
    } catch (error) {
      console.log(error);
    }
  }, [id]);

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
        <div>
          <DetailPage>
            <div>
              <div className="main_details">
                <div className="img_cont">
                  <img src={blogs?.blogImg} alt="blog image" />
                  <div className="date">
                    <h5 className="month">Feb</h5>
                    <span className="day">14</span>
                  </div>
                </div>
                <div className="text_sec">
                  <h3>
                    {blogs?.title ||
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                  </h3>

                  <div className="reactions">
                    <div className="inner">
                      <FaThumbsUp size={20} />
                      <span>{blogs?.likes?.length}</span>
                      <h5>Likes</h5>
                    </div>
                    <div className="inner">
                      <BiMessageAlt size={20} />
                      <span>{blogs?.comments?.length}</span>
                      <h5>Comments</h5>
                    </div>
                  </div>
                  <div className="blog">
                    <p>{blogs?.content}</p>

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
                  name={
                    blogs?.author?.firstname + " " + blogs?.author?.lastname
                  }
                  role={blogs?.author?.role}
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
                  {blogs.length > 0 &&
                    blogs?.comments &&
                    blogs?.comments.map((comment, idx) => (
                      <CommentCard
                        author={comment.author}
                        commentDate={comment.commendDate}
                        comment={comment.content}
                        reply={comment?.reply || []}
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
          </DetailPage>
        </div>
      </Wrapper>
    </div>
  );
};

export default BlogDetail;
