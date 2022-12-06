import React from "react";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "../../styles/Popular.module.scss";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const API_KEY = "a6d73666ed96432492d1a32fc36958fb";
  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };

  return (
    <div className={styles.wrapper}>
      <h3>Most Popular</h3>
      <Splide>
        {popular.map((recipe) => {
          return (
            <SplideSlide>
              <div className={styles.card}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Popular;
