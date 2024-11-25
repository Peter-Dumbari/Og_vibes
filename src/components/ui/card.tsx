import {
  ArrowDownIcon,
  MusicalNoteIcon,
  PlayPauseIcon,
  PlusIcon,
} from "@heroicons/react/16/solid";
import {
  ArrowDownCircleIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon, PauseIcon, PlayIcon } from "@heroicons/react/24/solid";

import React from "react";
import { BsThreeDotsVertical, BsTwitterX } from "react-icons/bs";

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

interface MusicListProps {
  item: {
    album: string;
    artist: string;
    song: string;
  }[];
}

interface PlaylistCardProps {
  item: {
    album: string;
    artist: string;
    song: string;
    playing: boolean;
    sn: number;
  }[];
}

interface TwitPostProps {
  post: string;
  datePosted: string;
}

interface ArtistCardProps {
  artist: {
    artist: string;
    artistImg: string;
    location: string;
    genres: string;
    bio: string;
    contacts: object[];
  };
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
                title={blog.title}
                image={blog.img}
                blog_date={blog.blog_date}
              />
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export const MusicListCard: React.FC<MusicListProps> = ({ item }) => {
  return (
    <div className="music_list_card_cont">
      {item.map((itm) => (
        <div className="inner">
          <div className="index">{itm.sn}</div>
          <div className="img_cont">
            <img src={itm.album} alt={itm.artist} />
            <div className="overlay"></div>
          </div>
          <div className="text_sec">
            <h3>{itm.song}</h3>
            <p>{itm.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const PlaylistCard: React.FC<PlaylistCardProps> = ({ item }) => {
  return (
    <div className="playlist_card_cont">
      {item.map((itm) => (
        <div className={`inner ${itm.playing ? "bg-primary" : null}`}>
          <div className="content">
            <div className="img_cont">
              <img src={itm.album} alt={itm.artist} />
              <div className="overlay">
                {itm.playing ? (
                  <PauseIcon className="icon" />
                ) : (
                  <PlayIcon className="icon" />
                )}
              </div>
            </div>
            <div className="text_sec">
              <h3>{itm.song}</h3>
              <p>{itm.artist}</p>
            </div>
          </div>

          <div className="actions">
            <ArrowDownIcon className="icon" />
            <PlusIcon className="icon rotate-45" />
          </div>
        </div>
      ))}
    </div>
  );
};

export const TwitterPostCard: React.FC<TwitPostProps> = ({
  post,
  datePosted,
}) => {
  return (
    <div className="twitcard">
      <div className="inner">
        <div className="card_head">
          <BsTwitterX size={20} className="icon" />
          <h3>Twitter Feed</h3>
        </div>

        <div className="body">
          <p>{post}</p>
        </div>

        <div className="date">
          <p>4 Mins ago</p>
        </div>
      </div>
    </div>
  );
};

export const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  return (
    <div className="artist_card">
      <div className="img_cont">
        <img src={artist.artistImg} alt={artist.artist} />
      </div>
      <div className="content">
        <h3>{artist.artist}</h3>
        <p>{artist.location}</p>
      </div>
      <div className="hover_items">
        <h4>{artist.artist}</h4>
        <h6>{artist.location}</h6>
        <p>{artist.bio}</p>

        <div className="contact">
          {artist.contacts.map((contact) => (
            <div className="icon">
              <a href={contact.link}>{contact.icon}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="bar_loader"></div>
    </div>
  );
};

export const EventMainCard: React.FC<EventCardProps> = ({
  name,
  address,
  eventDate,
  eventPoster,
  eventTime,
}) => (
  <div className="event_main_card">
    <div className="img_container">
      <img src={eventPoster} alt={name} />
      <div className="overlay"></div>
    </div>
    <div className="main_card_body">
      <div className="details">
        <div className="items">
          <h3>{name}</h3>
          <p>
            <span>Location:</span>
            {address}
          </p>

          <div className="date_time">
            <p>
              <span>Date:</span>
              {eventDate}
            </p>
            <p>
              <span>Time:</span>
              {eventTime}
            </p>
          </div>
        </div>

        <div className="btn_cont">
          <button className="event_btn">Buy Tickets</button>
        </div>
        {/* <div className="overlay"></div> */}
      </div>
      <div className="square_bg"></div>

      <div className="overlay"></div>
    </div>
  </div>
);
