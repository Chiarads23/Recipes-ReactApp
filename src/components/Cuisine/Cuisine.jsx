import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import styles from "../../styles/Cuisine.module.scss";

const Cuisine = () => {
  const API_KEY = "a6d73666ed96432492d1a32fc36958fb";
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${name}&number=20`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type)
  }, [params.type]);

  return < div className={styles.grid}>
{cuisine.map((item) => {
    return(
        <div className={styles.card} key={item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
        </div>
    )
})

}

  </div>;
};

export default Cuisine;
