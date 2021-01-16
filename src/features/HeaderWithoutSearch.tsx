import React from "react";

import githubIcon from "../images/githubIcon.svg";

import styles from "../styles/Header.module.css";

function HeaderWithoutInput(){
  return(
    <header className={styles.container}>
      <div className={styles.headerContent}>
        <img src={githubIcon} alt="githubIcon"/>
      </div>
    </header>
  )
}

export default HeaderWithoutInput;