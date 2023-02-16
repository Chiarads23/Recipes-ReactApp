import React from "react";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import styles from "../../styles/Popular.module.scss";

const Pescetarian = () => {
  const [fish, setFish] = useState([]);

  useEffect(() => {
    getFish();
  }, []);

  const API_KEY = "a6d73666ed96432492d1a32fc36958fb";
  const getFish = async () => {
    const check = localStorage.getItem("fishdish");
    if (check) {
      setFish(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=20&tags=pescetarian`
      );
      const data = await api.json();
      localStorage.setItem("fish", JSON.stringify(data.recipes));
      setFish(data.recipes);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h3>Pescetarian</h3>
      <Splide
        options={{
          arrows: false,
          perPage: 4,
          breakpoints: {
            960: {
              perPage: 3,
            },
            720: {
              perPage: 2,
              gap: "5px",
            },
          },
        }}
      >
        {fish.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div className={styles.card}>
                < Link to= {'/recipe/' + recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                </Link>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Pescetarian;
