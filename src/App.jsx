import React from "react";
import { useEffect, useState } from "react";
import "./App.scss";
import Pages from "./components/Pages";


const App = () => {

  const APP_KEY = 'a6d73666ed96432492d1a32fc36958fb';
 



  return (
    <div className="App">
   <Pages />
    </div>
  )
}

export default App;
{/* fetch ('spoonacular.com/api&key0${APP_KEY}') */}