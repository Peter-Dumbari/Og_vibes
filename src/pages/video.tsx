import React from "react";
import PaginationComponent from "../components/ui/pagination";
import { VideoCard } from "../components/ui/card";
import Wrapper from "../components/ui/wrapper";

const Video = () => {
  return (
    <div className="video_cont">
      <div className="banner">
        <h3>Og Music and Events Videos at Your Fingertips</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          possimus ipsam optio, veniam quas alias dignissimos blanditiis aliquam
          sed quibusdam.
        </p>
      </div>

      <Wrapper>
        <div className="videos">
          <div className="all_vid">
            <VideoCard
              thumbnail="https://trendybeatz.com/images/Asake-Work-Of-Art-AlbumArtwork1.jpg"
              title="Lonely at the Top - Asake"
              isPlaying
            />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
          <PaginationComponent />
        </div>
      </Wrapper>
    </div>
  );
};

export default Video;
