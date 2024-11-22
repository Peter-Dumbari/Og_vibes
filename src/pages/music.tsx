import React from "react";
import Wrapper from "../components/ui/wrapper";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import TableComponent from "../components/ui/table";

const Music = () => {
  let alpabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const data = [
    {
      title: "All my Life",
      artist: "K-Ci & JoJo",
      img: "https://trendybeatz.com/images/Asake-Work-Of-Art-AlbumArtwork1.jpg",
      genre: "R&B",
      released: "1997",
    },
    {
      title: "All Night Long",
      artist: "Lionel Richie",
      img: "https://trendybeatz.com/images/Asake-Work-Of-Art-AlbumArtwork1.jpg",
      genre: "R&B",
      released: "1983",
    },
    {
      title: "All of Me",
      img: "https://trendybeatz.com/images/Asake-Work-Of-Art-AlbumArtwork1.jpg",
      artist: "John Legend",
      genre: "R&B",
      released: "2013",
    },
    {
      title: "All my Life",
      artist: "K-Ci & JoJo",
      img: "https://trendybeatz.com/images/Asake-Work-Of-Art-AlbumArtwork1.jpg",
      genre: "R&B",
      released: "1997",
    },
    {
      title: "All Night Long",
      artist: "Lionel Richie",
      img: "https://trendybeatz.com/images/Asake-Work-Of-Art-AlbumArtwork1.jpg",
      genre: "R&B",
      released: "1983",
    },
    {
      title: "All of Me",
      img: "https://trendybeatz.com/images/Asake-Work-Of-Art-AlbumArtwork1.jpg",
      artist: "John Legend",
      genre: "R&B",
      released: "2013",
    },
  ];

  const columns = [
    {
      header: "Music",
      render: (row) => (
        <div className="music_img">
          <div className="img_cont">
            <img src={row.img} alt={row.title} />
            <div className="overlay"></div>
          </div>

          <div>
            <h6>{row.title}</h6>
          </div>
        </div>
      ),
      hideOnSmall: false,
    },
    { header: "Artist", accessor: "artist", hideOnSmall: false },
    { header: "Genre", accessor: "genre", hideOnSmall: true },
    { header: "Released", accessor: "released", hideOnSmall: true },
  ];

  return (
    <div className="music_container">
      <div className="banner">
        <h3>Listen and Download all Kind of Musics</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          possimus ipsam optio, veniam quas alias dignissimos blanditiis aliquam
          sed quibusdam.
        </p>
      </div>

      <Wrapper>
        <div className="inner">
          <h3 className="header">Tracks</h3>
        </div>

        <div className="sort_cont">
          <div className="search_container">
            <div className="search">
              <input placeholder="Search songs" />
            </div>
            <div className="search_options dont_show_options"></div>
          </div>
          <div className="sort">
            <h6>Sort By:</h6>

            <select>
              <option value="">Newest to Oldest</option>
              <option value="">Oldest to Newest</option>
            </select>
          </div>
        </div>

        <div className="sort_with_letters">
          <div className="alph_cont">
            {alpabets.map((alph, index) => (
              <button key={index}>{alph}</button>
            ))}
          </div>
        </div>

        <div className="music_list">
          <TableComponent data={data} columns={columns} rowsPerPage={3} />
        </div>
      </Wrapper>
    </div>
  );
};

export default Music;
