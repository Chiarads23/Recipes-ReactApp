import React from "react";
import { Route, Routes} from "react-router-dom";
import Home from "../Home";
import Cuisine from "../Cuisine/Cuisine";
import Searched from "../Searched/Searched";

const Pages = () => {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />}/>
      </Routes>
 
  );
};

export default Pages;
