import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../../styles/Searched.module.scss";
import { motion } from "framer-motion";

const Searched = () => {
  const API_KEY = "a6d73666ed96432492d1a32fc36958fb";

  const [searchedRec, setSearchedRec] = useState([]);

  let params = useParams();

  //SAME FETCH AS 'getCuisine' FUNCTION
  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}&number=20`
    );
    const recipes = await data.json();
    setSearchedRec(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div className={styles.grid}>
      {searchedRec.map((item) => {
        return (
          <motion.div
            className={styles.card}
            key={item.id}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Searched;
