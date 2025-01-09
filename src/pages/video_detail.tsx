import React from "react";
import Wrapper from "../components/ui/wrapper";
import { BlogCard, CommentCard } from "../components/ui/card";
import { CommentInputField } from "../components/ui/inputComponent";
import { VideoPlayer } from "../components/ui/player";
import DetailPage from "../components/ui/detailPage/detailPage";

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
        {/* <div className="vid_detail">
          <Wrapper>
            
          </Wrapper>
        </div> */}
        <Wrapper>
          <DetailPage>
            <div className="inner mb-10">
              <div className="vidbox_container">
                <VideoPlayer src="https://videos.pexels.com/video-files/3209663/3209663-sd_640_360_25fps.mp4" />
              </div>
            </div>
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
          </DetailPage>
        </Wrapper>
      </div>
    </div>
  );
};

export default Vid_Detail;
