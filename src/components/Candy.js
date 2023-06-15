import React from "react";
import { Link } from "react-router-dom";
const Candy = () => {
  return (
    <div>
      <h2>Yay candy! So yummy</h2>
      <h3>
        <Link to="/">Go back</Link>
      </h3>
    </div>
  );
};

export default Candy;
