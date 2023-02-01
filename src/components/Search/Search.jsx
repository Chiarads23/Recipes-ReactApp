import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/Search.module.scss";

const Search = () => {
  const [input, setInput] = useState("");

  //ALLOWS 
  const navigate= useNavigate();

  const submitHandler =(e) =>{
    e.preventDefault();  //TO AVOID THE PAGE FROM REFRESHING
    navigate('/searched/' + input)  //ALLOWS TO LINK TO THE PAGE WITHOUT LINK ELEMENTS
  }

  return (
    <form onSubmit={submitHandler} 
    className={styles.form}>
      <div className={styles.inputDiv}>
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </form>
  );
};

export default Search;
