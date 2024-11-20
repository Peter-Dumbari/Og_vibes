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
      title: "Lonely at the top",
      musicCover:
        "https://trendybeatz.com/images/Asake-Work-Of-Art-AlbumArtwork1.jpg",
      artist: "Asake",
      label: "YBNL",
      genre: "Afrobeat",
      released: "2021",
    },
    {
      title: "Lonely at the top",
      musicCover:
        "https://trendybeatz.com/images/Asake-Work-Of-Art-AlbumArtwork1.jpg",
      artist: "Asake",
      label: "YBNL",
      genre: "Afrobeat",
      released: "2021",
    },
    {
      title: "Lonely at the top",
      musicCover:
        "https://trendybeatz.com/images/Asake-Work-Of-Art-AlbumArtwork1.jpg",
      artist: "Asake",
      label: "YBNL",
      genre: "Afrobeat",
      released: "2021",
    },
    {
      title: "Lonely at the top",
      musicCover:
        "https://trendybeatz.com/images/Asake-Work-Of-Art-AlbumArtwork1.jpg",
      artist: "Asake",
      label: "YBNL",
      genre: "Afrobeat",
      released: "2021",
    },
    {
      title: "Lonely at the top",
      musicCover:
        "https://trendybeatz.com/images/Asake-Work-Of-Art-AlbumArtwork1.jpg",
      artist: "Asake",
      label: "YBNL",
      genre: "Afrobeat",
      released: "2021",
    },
  ];

  const columns = [
    { header: "Title", accessor: "title" },
    {
      accessor: "musicCover",
    },
    { header: "Artist", accessor: "artist" },
    { header: "Label", accessor: "label" },
    { header: "Genre", accessor: "genre" },
    { header: "Released", accessor: "released" },
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
