import React from "react";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import styles from "../../styles/Popular.module.scss";

const Veggies= () => {
    
  const [veggies, setVeggies] = useState([]);

  useEffect(() => {
    getVeggies();
  }, []);

  const API_KEY = "a6d73666ed96432492d1a32fc36958fb";
  const getVeggies = async () => {
    const check = localStorage.getItem("veggies");
    if (check) {
      setVeggies(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=20&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggies", JSON.stringify(data.recipes));
      setVeggies(data.recipes);
    }
  };

    return(
<div className={styles.wrapper}>
      <h3>Veggies delicious</h3>
      <Splide
        options={{
          arrows: false,
          perPage: 4,
          gap:'8px',
          breakpoints: {
            960: {
              perPage: 3,
            },
            720: {
              perPage: 2,
            },
          },
        }}
      >
        {veggies.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div className={styles.card}>
              < Link to= {'/recipe/' + recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <div className={styles.gradient}></div>
                </Link>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
    )
}

export default Veggies;