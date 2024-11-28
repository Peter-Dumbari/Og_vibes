import React from "react";
import Wrapper from "../components/ui/wrapper";
import { FaQuoteRight } from "react-icons/fa6";

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
                <div className="date">Feb 14</div>
              </div>
              <div className="text_sec">
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa, unde.
                </h3>

                <div className="reactions">
                  <div className="comment">
                    <span>3</span>
                    <div className="h5">Comments</div>
                  </div>
                  <div className="link">
                    <span>3</span>
                    <div className="h5">Comments</div>
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
                      <FaQuoteRight size={30} className="w-50 h-50" />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tenetur, harum.
                      </p>

                      <div className="divider"></div>
                    </div>
                  </div>
                </div>
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
