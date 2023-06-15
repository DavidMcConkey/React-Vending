import React from "react";
import { Link } from "react-router-dom";

const VendingMachine = () => {
  return (
    <div>
      <h1>Welcome to the Vending Machine, take your pick!</h1>
      <h2>
        <Link to="/candy">Candy</Link>
      </h2>
      <h2>
        <Link to="/chips">Chips</Link>
      </h2>
      <h2>
        <Link to="/apples">Apples</Link>
      </h2>
    </div>
  );
};

export default VendingMachine;
