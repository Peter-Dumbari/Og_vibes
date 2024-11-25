import React from "react";
import Wrapper from "../components/ui/wrapper";

const Blogs = () => {
  return (
    <div className="blogs_container">
      <div className="banner">
        <h3>Your Daily Dose of Knowledge and Inspiration</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          possimus ipsam optio, veniam quas alias dignissimos blanditiis aliquam
          sed quibusdam.
        </p>
      </div>

      <Wrapper>
        <div className="blogs_holder"></div>
      </Wrapper>
    </div>
  );
};

export default Blogs;
