import React from "react";
import { Carousel } from "../components/ui/carousel";
import { UpdateCard } from "../components/ui/card";
import { MusicalNoteIcon } from "@heroicons/react/16/solid";
import { ListBulletIcon } from "@heroicons/react/24/outline";

const home = () => {
  return (
    <div className="home_cont w-full">
      <Carousel
        item={[
          {
            image:
              "https://img.freepik.com/premium-photo/marn-grook-player-traditional-aboriginal-attire_419341-185661.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
            alt: "Image 1",
            title: "OUR LATEST EVENT  IS READY NOW!",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione excepturi accusantium, aperiam praesentium minus voluptatibus doloremque sequi consectetur! Libero, eaque?",
          },
          {
            image:
              "https://img.freepik.com/free-photo/photorealistic-portrait-african-rastafarian-woman-with-dreads_23-2151516463.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
            alt: "Image 2",
            title: "OUR LATEST MUSICS  IS READY NOW!",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione excepturi accusantium, aperiam praesentium minus voluptatibus doloremque sequi consectetur! Libero, eaque?",
          },
          {
            image:
              "https://img.freepik.com/free-photo/man-playing-instrument-international-jazz-day_23-2148927519.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
            alt: "Image 3",
            title: "OUR LATEST VIDEOS  IS READY NOW!",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione excepturi accusantium, aperiam praesentium minus voluptatibus doloremque sequi consectetur! Libero, eaque?",
          },
        ]}
      />

      <div className="updates ">
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
          icon={<MusicalNoteIcon width="100" />}
          type="Traditional Music"
          image="https://img.freepik.com/premium-photo/african-drummer-plays-djembe-traditional-musical-instrument_152520-1228.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid"
        />
      </div>
    </div>
  );
};

export default home;
