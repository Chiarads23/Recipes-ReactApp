import React from "react";
import {GiKnifeFork} from 'react-icons/gi';

import styles from '../../styles/Navbar.module.scss';

const Navbar = () => {
    return(
        <div className={styles.navbar}>
            <GiKnifeFork />
            <p className={styles.logo} to={'/'}>Recipes hunt</p>
     </div>
    )
};

export default Navbar;
