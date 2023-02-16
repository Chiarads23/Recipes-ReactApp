import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/Search.module.scss";
import { motion } from "framer-motion";

const Search = () => {

  //GET VALUE OF INPUT TEXT
  const [input, setInput] = useState("");

  //ALLOWS TO LINK TO THE PAGE WITHOUT LINK ELEMENTS
  const navigate = useNavigate();

  //ALLOWS TO GO TO 'searched' PAGE ON 'enter' ACTION
  const submitHandler = (e) => {
    e.preventDefault(); //TO AVOID THE PAGE FROM REFRESHING
    navigate("/searched/" + input); 
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <motion.div className={styles.inputDiv}
        animate={{opacity: 1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration: 0.5}}>
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </motion.div>
    </form>
  );
};

export default Search;
