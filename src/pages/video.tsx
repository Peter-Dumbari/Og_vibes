import React from "react";
import PaginationComponent from "../components/ui/pagination";
import { VideoCard } from "../components/ui/card";
import Wrapper from "../components/ui/wrapper";
import { SimpleVideoPlayer } from "../components/ui/player";

const Video = () => {
  const demoVideo = [
    {
      src: "https://videos.pexels.com/video-files/3209663/3209663-sd_640_360_25fps.mp4",
    },
    {
      src: "https://videos.pexels.com/video-files/3209663/3209663-sd_640_360_25fps.mp4",
    },
    {
      src: "https://videos.pexels.com/video-files/3209663/3209663-sd_640_360_25fps.mp4",
    },
    {
      src: "https://videos.pexels.com/video-files/3209663/3209663-sd_640_360_25fps.mp4",
    },
    {
      src: "https://videos.pexels.com/video-files/3209663/3209663-sd_640_360_25fps.mp4",
    },
  ];

  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const videoPerPage = 6;
  const displayedPages = Math.ceil(demoVideo.length / videoPerPage);
  const index = (currentPage - 1) * videoPerPage;
  const currentVideos = demoVideo.slice(index, currentPage + videoPerPage);

  const handleChange = (page: number) => {
    if (page >= 1 && page <= displayedPages) {
      setCurrentPage(page);
    }
  };
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
          <div className="vids_container">
            <div className="all_vid">
              {currentVideos.map((item, idx) => {
                return <SimpleVideoPlayer src={item.src} key={idx} />;
              })}
            </div>
          </div>
          <PaginationComponent
            onPageChange={handleChange}
            totalPages={displayedPages}
            currentPage={currentPage}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Video;
