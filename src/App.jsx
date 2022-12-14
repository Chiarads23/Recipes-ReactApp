import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import {GiKnifeFork} from 'react-icons/gi';
import Pages from "./components/Pages";
import Category from "./components/Category";
import Search from "./components/Search/Search";
import styles from "./App.module.scss";

const App = () => {


  return (
    <div className="App">

      <BrowserRouter>
      <div className={styles.navbar}>
      <GiKnifeFork /> 
      <Link to={'/'}>Recipes hunt</Link>
      </div>
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

