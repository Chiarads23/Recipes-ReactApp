import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../../styles/Recipe.module.scss";

const Recipe = () => {
  const API_KEY = "a6d73666ed96432492d1a32fc36958fb";
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeBtn, setActiveBtn] = useState('instructions');

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
    <div className={styles.wrapper}>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <div className={styles.info}>
        <button 
        className={activeBtn === 'instructions' ? 'active' : ''}
        onClick={()=> setActiveBtn('instructions')}>Instructions</button>
        <button 
         className={activeBtn === 'ingredients' ? 'active' : ''}
        onClick={()=> setActiveBtn('ingredients')}>Ingredients</button>
        {activeBtn === 'instructions' && (
                 <div>
                 <h3 dangerouslySetInnerHTML={{__html: details.summary }}></h3>
                 <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
               </div>
        )};
 {activeBtn === 'ingredients' && (
     <ul>
     {details.extendedIngredients.map((ingredient) => 
     <li key={ingredient.id}>{ingredient.original}</li>
     )}
   </ul>
 )}
 
      </div>
    </div>
  );
};

export default Recipe;
