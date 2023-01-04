import React from "react";
import Veggies from "../Veggies/Veggie";
import Popular from "../Popular/Popular";
import Dessert from "../Dessert/Dessert";
import styles from "../../styles/Home.module.scss";

const Home =()=> {
    return (
        <div>
            <Popular />
            <Veggies />
            <Dessert />
        </div>
    )
}

export default Home;