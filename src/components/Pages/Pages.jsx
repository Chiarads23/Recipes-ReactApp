import React from "react";
import { Route, Routes, useLocation} from "react-router-dom";
import Home from "../Home";
import Cuisine from "../Cuisine/Cuisine";
import Searched from "../Searched/Searched";
import Recipe from "../Recipe/Recipe";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  
//useLocation returns the current 'location' object, it's useful for animation effects on change of location.
const location = useLocation();

  return (
<AnimatePresence mode='wait'>
      <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />}/>
        <Route path="/recipe/:name" element={<Recipe />}/>
      </Routes>
 </AnimatePresence>
  );
};

export default Pages;
