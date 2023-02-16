import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../../styles/Recipe.module.scss";

const Recipe = () => {
  const API_KEY = "a6d73666ed96432492d1a32fc36958fb";

  let params = useParams();

  const [details, setDetails] = useState({});

  const [activeBtn, setActiveBtn] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <motion.div 
          animate={{opacity: 1}}
          initial={{opacity:0}}
          exit={{opacity:0}}
          transition={{duration: 0.5}} className={styles.wrapper}>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <div className={styles.info}>
        <button onClick={() => setActiveBtn("instructions")}>
          Instructions
        </button>
        <button onClick={() => setActiveBtn("ingredients")}>
          Ingredients
        </button>

        {activeBtn === "instructions" && (
          <div>
            {/* IT ALLOWS TO RENDER THE TEXT, SO THAT THE HTML TAGS DON'T DISPLAY  */}
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )} ;
        
        {activeBtn === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default Recipe;
