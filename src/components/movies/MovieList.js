import { inject, observer } from "mobx-react";
import React from "react";

const MovieList = ({ movieStore }) => {
  // build your UI here
  return <div></div>;
};

export default inject("movieStore")(observer(MovieList));
