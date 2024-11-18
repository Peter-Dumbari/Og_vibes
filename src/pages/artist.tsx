import React from "react";
import { ArtistCard } from "../components/ui/card";

const Artist = () => {
  const artist = [
    {
      artist: "Davido",
      artistImg: "https://source.unsplash.com/400x400/?music",
      genres: "Afrobeat",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      location: "Lagos, Nigeria",
      contacts: [
        {
          linkedIn: "https://www.linkedin.com",
          twitter: "https://www.twitter.com",
          facebook: "https://www.facebook.com",
          instagram: "https://www.instagram.com",
        },
      ],
    },
    {
      artist: "Wizkid",
      artistImg: "https://source.unsplash.com/400x400/?music",
      genres: "Afrobeat",
      location: "Lagos, Nigeria",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",

      contacts: [
        {
          linkedIn: "https://www.linkedin.com",
          twitter: "https://www.twitter.com",
          facebook: "https://www.facebook.com",
          instagram: "https://www.instagram.com",
        },
      ],
    },
    {
      artist: "Highlife Bobby",
      artistImg: "https://source.unsplash.com/400x400/?music",
      location: "Accra, Ghana",
      genres: "Highlife",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      contacts: [
        {
          linkedIn: "https://www.linkedin.com",
          twitter: "https://www.twitter.com",
          facebook: "https://www.facebook.com",
          instagram: "https://www.instagram.com",
        },
      ],
    },
  ];
  return (
    <div className="artist_container">
      <div className="banner">
        <h3>Popular Music Artist and Contacts</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
          itaque obcaecati labore aut. Illo consequuntur quia eius suscipit,
          pariatur assumenda?
        </p>
      </div>

      <div className="artist_list">
        {artist.map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}
      </div>
    </div>
  );
};

export default Artist;
