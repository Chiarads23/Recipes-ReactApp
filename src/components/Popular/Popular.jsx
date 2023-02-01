import React from "react";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import styles from "../../styles/Popular.module.scss";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  
  useEffect(() => {
    getPopular();
  }, []);

  const API_KEY = "a6d73666ed96432492d1a32fc36958fb";
//STORING FETCH INTO LOCAL STORAGE: CHECKING FIRST WHAT'S IN IT. IF THERE'S THE ITEM WE GET IT WITH SET POPULAR, 
//OTHERWISE IT FETCHES DATA AND SET IT
  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
//STRING TO ARRAY-in local storage you can only SAVE STRINGS
      setPopular(JSON.parse(check)); 
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=20`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));  // FROM ARRAY TO STRING
      setPopular(data.recipes);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h3>Most Popular</h3>
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
        {popular.map((recipe) => {
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

export default Popular;
