import React from "react";
import Loader from "./loader";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Manager = () => {
  const isloading = useSelector((state: RootState) =>
    Object.values(state).some(
      (slice) => "isloading" in slice && slice.isloading
    )
  );

  return <div>{isloading && <Loader />}</div>;
};

export default Manager;
