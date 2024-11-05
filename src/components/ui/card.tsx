import { MusicalNoteIcon } from "@heroicons/react/16/solid";
import { HeartIcon, PlayIcon } from "@heroicons/react/24/outline";
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
        <PlayIcon width={24} height={24} />
        <h3>{title}</h3>
        <p>{artist}</p>
        <p>{description}</p>

        <div className="flex ">
          <div className="tracks flex">
            <MusicalNoteIcon width={16} height={16} />
            <p>{tracks} Tracks</p>
          </div>
          <div className="tracks flex">
            <PlayIcon width={16} height={16} />
            <p>{album} Tracks</p>
          </div>
          <div className="tracks flex">
            <HeartIcon width={16} height={16} />
            <p>{likes} Tracks</p>
          </div>
        </div>

        <div className="ratings">
          <span>7.3</span>
        </div>
      </div>
    </div>
  );
};
