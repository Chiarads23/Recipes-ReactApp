import React from "react";
import Veggies from "../Veggies/Veggie";
import Popular from "../Popular/Popular";
import Pescetarian from "../Pescetarian/Pescetarian";
import { motion } from "framer-motion";

const Home =()=> {
    return (
        <motion.div
        animate={{opacity: 1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration: 0.5}}
        >
            <Popular />
            <Veggies />
            <Pescetarian/>
        </motion.div>
    )
}

export default Home;