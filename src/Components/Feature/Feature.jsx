import React from "react";
import line from "../../assets/line.png";
import styles from "./Feature.module.css";
const Feature = (props) => {
  return (
    <div className={styles.gpt3__features_container__feature}>
      <div className={styles.feature_innercontainer}>
        <img src={line} alt="line"></img>
        <h1>{props.title}</h1>
      </div>
      <div className={styles.feature_innercontainerpara}>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Feature;
