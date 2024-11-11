import { MusicalNoteIcon, PlusIcon } from "@heroicons/react/16/solid";
import {
  ArrowDownCircleIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon, PlayIcon } from "@heroicons/react/24/solid";

import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface CardProps {
  title: string;
  description: string;
  type: string;
  image: string;
  icon;
}

interface AlbumCardProps {
  title: string;
  description: string;
  artist: string;
  image: string;
  album: string;
  likes: number;
  tracks: number;
}

interface EventCardProps {
  name: string;
  address: string;
  eventDate: string;
  eventTime: string;
  eventPoster: string;
}

interface BlogCardProps {
  title: string;
  image: string;
  blog_date: string;
}

interface PopCardProps {
  item: {
    album: string;
    artist: string;
    cover: string;
    posted: string;
    index: number;
    tops: number;
    songs: string[];
  }[];
}

interface CollectionCardProps {
  item: {
    bannerText: string;
    bannerImg: string;
    collectionDate: string;
    collectionAuthor: string;
    blogs: object[];
  }[];
}

export const UpdateCard: React.FC<CardProps> = ({
  title,
  description,
  image,
  icon,
  type,
}) => {
  return (
    <div className="update_card">
      <img className="img" src={image} alt={title} />

      <div className="overlay"></div>

      <div className="update_card_content">
        <h3>{title}</h3>
        <p>{type}</p>
        <div className="update_card_icon">{icon}</div>
      </div>

      <div className="hover-content">
        <h5 className="hover-content_type">{type}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export const AlbumCard: React.FC<AlbumCardProps> = ({
  title,
  description,
  image,
  index,
  album,
  likes,
  artist,
  tracks,
}) => {
  return (
    <div className="album_card">
      <img className="img" src={image} alt={title} />

      <div className="overlay"></div>

      <div className="album_card_content">
        <div className="ratings absolute">
          <span>7.3</span>
        </div>

        <h3>{title}</h3>
        <p>{artist}</p>
      </div>

      <div className="hover-content">
        <div className="text p-5 flex items-center flex-col">
          <PlayIcon className="playicon" />

          <h3>{title}</h3>
          <p>{artist}</p>
          <p className="description">{description}</p>
        </div>

        <div className="icons_foot px-4">
          <div className="tracks flex">
            <MusicalNoteIcon className="icon" />
            <p>{tracks} Tracks</p>
          </div>
          <div className="album flex">
            <PlayIcon className="icon" />
            <p>509</p>
          </div>
          <div className="likes flex">
            <HeartIcon className="icon" />
            <p>{likes}</p>
          </div>
        </div>

        <div className="ratings">
          <span>7.3</span>
        </div>
      </div>
    </div>
  );
};

// Event Card

export const EventCard: React.FC<EventCardProps> = ({
  name,
  address,
  eventDate,
  eventPoster,
  eventTime,
}) => {
  return (
    <div className="event_card">
      <div className="img-cont">
        <img className="img" src={eventPoster} alt={name} />
      </div>
      <div className="content">
        <div className="overlay"></div>

        <div className="event_location">
          <h3>{name}</h3>
          <p>{address}</p>
        </div>
        <div className="time">
          <p>{eventDate}</p>
          <p>{eventTime}</p>
        </div>

        <div className="btn_cont">
          <button className="event_btn">Buy Tickets</button>
        </div>
      </div>
    </div>
  );
};

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  image,
  blog_date,
}) => {
  return (
    <div className="blog_card">
      <div className="img-cont">
        <img className="img" src={image} alt={title} />
        <div className="overlay"></div>
      </div>
      <div className="blog_card_content">
        <h3>{title}</h3>
        <p>{blog_date}</p>
      </div>
    </div>
  );
};
export const PopTopCard: React.FC<PopCardProps> = ({ item }) => {
  const [activeCard, setActiveCard] = React.useState<number | null>(null);

  const handleShowSongs = (cardIndex: number) => {
    setActiveCard(activeCard === cardIndex ? null : cardIndex);
  };

  return (
    <div className="pop_card">
      {item.map((itm, index) => (
        <>
          <div className="card_head">
            <div className="img-cont">
              <img className="img" src={itm.cover} alt={itm.album} />
            </div>
            <div className="pop_card_content">
              <div className="info">
                <h3>{itm.album}</h3>
                <p>{itm.artist}</p>
              </div>
              <div className="details">
                <p>Top {itm.tops}</p>
                <p>{itm.posted}</p>
                <BsThreeDotsVertical
                  size={40}
                  className="icon rotate-90"
                  onClick={() => handleShowSongs(index)}
                />
              </div>
            </div>
          </div>

          <div
            className={`songs ${
              activeCard === index ? "slideInDown" : "slideOutDown"
            }`}>
            {itm.songs.map((item, index) => (
              <div className="songs_content" key={index}>
                <div className="song_title">
                  <PlayCircleIcon className="playIcon" />
                  <h3 className="name">{item}</h3>
                </div>

                <div className="functions">
                  <PlusIcon className="icon" />
                  <ArrowDownCircleIcon className="icon" />
                </div>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export const CollectionCard: React.FC<CollectionCardProps> = ({ item }) => {
  return (
    <div className="collection_cont">
      {item.map((itm, indx) => (
        <>
          <div className="banner_sec" key={indx}>
            <div className="img_cont">
              <img src={itm.bannerImg} alt={itm.collectionAuthor} />
              <div className="overlay"></div>
            </div>

            <div className="collection_desc">
              <h3>{itm.bannerText}</h3>
              <div className="flex dateAuthor">
                <p className="author">{itm.collectionAuthor}</p>-
                <p className="date">{itm.collectionDate}</p>
              </div>
            </div>
          </div>

          <div className="collection_blogs">
            {itm.blogs.map((blog, indx) => (
              <BlogCard
                key={indx}
                title={blog?.title}
                image={blog?.img}
                blog_date={blog?.blog_date}
              />
            ))}
          </div>
        </>
      ))}
    </div>
  );
};
