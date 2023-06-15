import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VendingMachine from "../src/components/VendingMachine";
import Chips from "../src/components/Chips";
import Candy from "../src/components/Candy";
import Apples from "../src/components/Apples";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<VendingMachine />} />
          <Route exact path="/chips" element={<Chips />} />
          <Route exact path="/candy" element={<Candy />} />
          <Route exact path="/apples" element={<Apples />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
