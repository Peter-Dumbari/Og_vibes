import React, { useEffect } from "react";
import Wrapper from "../components/ui/wrapper";
import TableComponent from "../components/ui/table";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getAllMusic } from "../redux/features/musics/musicSlice";

const Music = () => {
  const { musics } = useSelector((state: RootState) => state.music);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(getAllMusic());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
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

  const columns = [
    {
      header: "Music",
      render: (row) => (
        <div className="music_img">
          <div className="img_cont">
            <img src={row.thumbnailUrl} alt={row.title} />
            <div className="overlay"></div>
          </div>

          <div>
            <h6>{row.title}</h6>
          </div>
        </div>
      ),
      hideOnSmall: false,
    },
    {
      header: "Artist",
      render: (row) => <>{row?.artist?.name}</>,
    },
    { header: "Genre", accessor: "category", hideOnSmall: true },
    { header: "Released", accessor: "postDate", hideOnSmall: true },
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
          <TableComponent data={musics?.music} columns={columns} />
        </div>
      </Wrapper>
    </div>
  );
};

export default Music;
