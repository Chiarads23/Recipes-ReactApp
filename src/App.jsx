import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import Pages from "./components/Pages";
import Category from "./components/Category";
import Search from "./components/Search/Search";
import styles from "./App.module.scss";
import { motion } from "framer-motion";

const App = () => {

//Browser router gives functionality to the routes in 'Pages' and 'Categories'
  return (
    <motion.div className="App"
     animate={{opacity: 1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration: 0.5}}>
      <BrowserRouter>
        <div className={styles.navbar}>
          <GiKnifeFork />
          <Link to={"/"}>Recipes hunt</Link>
        </div>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </motion.div>
  );
};

export default App;



