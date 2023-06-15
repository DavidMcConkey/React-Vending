import React from "react";
import { Link } from "react-router-dom";
const Apples = () => {
  return (
    <div>
      <h2>Yay apples! So healthy</h2>
      <h3>
        <Link to="/">Go back</Link>
      </h3>
    </div>
  );
};

export default Apples;
