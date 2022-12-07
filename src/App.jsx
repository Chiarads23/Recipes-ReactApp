import React from "react";
// import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Pages from "./components/Pages";
import Category from "./components/Category";
import Search from "./components/Search/Search";
import "./App.scss";

const App = () => {


  return (
    <div className="App">

      <BrowserRouter>
      <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
};

export default App;

 // const APP_KEY = "a6d73666ed96432492d1a32fc36958fb" ;
  /* fetch ('spoonacular.com/api&key0${APP_KEY}') */

