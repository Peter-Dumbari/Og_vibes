import React from "react";
import { ArtistCard } from "../components/ui/card";
import Wrapper from "../components/ui/wrapper";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getAllArtist } from "../redux/features/artists/artistSlice";

const Artist = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { artists } = useSelector((state: RootState) => state.artists);

  React.useEffect(() => {
    try {
      dispatch(getAllArtist());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  return (
    <div className="artist_container">
      <div className="banner">
        <h3>Popular Music Artist and their Infos</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
          itaque obcaecati labore aut. Illo consequuntur quia eius suscipit,
          pariatur assumenda?
        </p>
      </div>

      <Wrapper>
        <div className="artist_list">
          {artists.map((artist, index) => (
            <ArtistCard key={index} artist={artist} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Artist;
