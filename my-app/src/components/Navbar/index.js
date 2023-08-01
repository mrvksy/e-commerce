import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from '@chakra-ui/react';
import { useState } from "react";

function Navbar() {
  const [filterText, setFilterText] = useState('');



  return (
    <nav className={styles.nav}>
    <div className={styles.left}>
    <Button colorScheme='#2a59fe'>Eteration</Button>
    <div className="inputContainer">
    <input className="input" placeholder="Search" value={filterText} onChange={(e) => setFilterText(e.target.value)}></input>
    </div>
   <div className="dataContainer">
  
   </div>
    </div>
    
    <div className="right">
    <Button colorScheme='#2a59fe'>Sepet</Button>
    <Button colorScheme='#2a59fe'>Login</Button>
    </div>
</nav>
    
  );
}

export default Navbar;
