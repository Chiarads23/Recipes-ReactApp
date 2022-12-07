import React from "react";
import Veggies from "../Veggies/Veggie";
import Popular from "../Popular/Popular";
import styles from "../../styles/Home.module.scss";

const Home =()=> {
    return (
        <div>
            <Popular />
            <Veggies />
        </div>
    )
}

export default Home;