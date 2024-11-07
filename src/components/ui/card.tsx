import { MusicalNoteIcon } from "@heroicons/react/16/solid";
import { HeartIcon, PlayIcon } from "@heroicons/react/24/solid";

import React from "react";

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
      <img className="img" src={eventPoster} alt={name} />
      <div className="event_location">
        <h3>{name}</h3>
        <p>{address}</p>
      </div>
      <div className="time">
        <p>{eventDate}</p>
        <p>{eventTime}</p>
      </div>

      <div className="btn_cont">
        <button className="btn">Buy Tickets</button>
      </div>
    </div>
  );
};
