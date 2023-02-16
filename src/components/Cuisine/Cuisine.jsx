import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
 import { motion } from "framer-motion";
import styles from "../../styles/Cuisine.module.scss";

const Cuisine = () => {
  const API_KEY = "a6d73666ed96432492d1a32fc36958fb";

  const [cuisine, setCuisine] = useState([]);

  //USE PARAMS ALLOWS TO PULL OUT THE KEYWORDS FROM THE URL
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${name}&number=20`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <div className={styles.grid}>
      {cuisine.map((item) => {
        return (
          <motion.div 
          animate={{opacity: 1}}
          initial={{opacity:0}}
          exit={{opacity:0}}
          transition={{duration: 0.5}}
          
          className={styles.card} key={item.id}>

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

export default Cuisine;
