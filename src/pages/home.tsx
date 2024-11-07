import React from "react";
import {
  AlbumCarousel,
  Carousel,
  EventCarousel,
} from "../components/ui/carousel";
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
            title: "OUR LATEST EVENT  IS READY NOW!",
            album: "Twice As Tall",
            likes: 0,
            track: 0,
            artist: "BurnaBoy",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione excepturi accusantium, aperiam praesentium minus voluptatibus doloremque sequi consectetur! Libero, eaque?",
          },
          {
            image:
              "https://img.freepik.com/free-photo/photorealistic-portrait-african-rastafarian-woman-with-dreads_23-2151516463.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
            title: "OUR LATEST MUSICS  IS READY NOW!",
            artist: "BurnaBoy",
            likes: 4,
            track: 21,
            album: "Twice As Tall",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione excepturi accusantium, aperiam praesentium minus voluptatibus doloremque sequi consectetur! Libero, eaque?",
          },
          {
            image:
              "https://img.freepik.com/free-photo/man-playing-instrument-international-jazz-day_23-2148927519.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
            title: "OUR LATEST VIDEOS  IS READY NOW!",
            artist: "BurnaBoy",
            likes: 7,
            track: 21,
            album: "Twice As Tall",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione excepturi accusantium, aperiam praesentium minus voluptatibus doloremque sequi consectetur! Libero, eaque?",
          },
        ]}
      />

      <section className="updates ">
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
      </section>

      <section className="musics">
        <div className="flex">
          <div className="col album">
            <div className="head bg-tabsBackground">
              <h4 className="title">Newly Release Albums</h4>
            </div>

            <div className="albums">
              <AlbumCarousel
                item={[
                  {
                    image:
                      "https://img.freepik.com/premium-photo/portrait-man-playing-guitar_1048944-8784999.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                    likes: 10,
                    track: 21,
                    artist: "BurnaBoy",
                    album: "Twice As Tall",
                    title: "Twice As Tall",
                    description:
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione excepturi",
                  },
                  {
                    image:
                      "https://img.freepik.com/premium-photo/renaissance-faire_555695-7984.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                    likes: 10,
                    artist: "BurnaBoy",
                    track: 21,
                    album: "Twice As Tall",
                    title: "A Better Time",
                    description:
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione excepturi",
                  },
                  {
                    image:
                      "https://img.freepik.com/free-photo/woman-playing-guitar-local-event_23-2149188079.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                    likes: 10,
                    artist: "BurnaBoy",
                    track: 21,
                    album: "Twice As Tall",
                    title: "The Way Too Big",
                    description:
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                  },
                  {
                    image:
                      "https://img.freepik.com/free-photo/smiley-boy-playing-drum_23-2148852743.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
                    likes: 10,
                    artist: "BurnaBoy",
                    track: 21,
                    album: "Twice As Tall",
                    title: "Album 1",
                    description: "Lorem ipsum",
                  },
                ]}
              />
            </div>

            <div className="head bg-tabsBackground">
              <h4 className="title">Upcoming Events</h4>
            </div>

            <div className="events_cont">
              <EventCarousel
                item={[
                  {
                    event: "Event 1",
                    eventPoster: "https://img.freepik",
                    eventTime: "12:00 PM",
                    evenDate: "12/12/2021",
                    address: "Lagos, Nigeria",
                  },
                  {
                    event: "Event 1",
                    eventPoster: "https://img.freepik",
                    eventTime: "12:00 PM",
                    evenDate: "12/12/2021",
                    address: "Lagos, Nigeria",
                  },
                  {
                    event: "Event 1",
                    eventPoster: "https://img.freepik",
                    eventTime: "12:00 PM",
                    evenDate: "12/12/2021",
                    address: "Lagos, Nigeria",
                  },
                ]}
              />
            </div>
          </div>

          <div className="col artist">
            <div className="head bg-tabsBackground">
              <h4 className="title">Top 10 Artists </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
