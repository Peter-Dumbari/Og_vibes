import React from "react";
import Wrapper from "../components/ui/wrapper";
import { FaQuoteRight, FaThumbsUp } from "react-icons/fa6";
import { BiMessageAlt } from "react-icons/bi";
import { BlogPosterCard, MiniCollection } from "../components/ui/card";

const BlogDetail = () => {
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

            <div className="poster_cont">
              <BlogPosterCard
                name="James Lio"
                role="Admin"
                tag="Master Developer"
                bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, accusamus, adipisicing elit. Quas, accusamus."
                profile="https://img.freepik.com/free-photo/man-blows-cheeks-has-discontent-expression-being-dissatisfied-with-something_273609-17085.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid"
              />
            </div>

            <div className="related_art">
              <div className="blog_detail_page_header">
                <span>Related Article</span>
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
            </div>

            <div className="comment_sec">
              <div className="blog_detail_page_header">
                <span>There are 03 comment For this Article</span>
              </div>
            </div>
          </div>
          <div className="aob"></div>
        </div>
      </Wrapper>
    </div>
  );
};

export default BlogDetail;
