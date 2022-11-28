import React from "react";
import styles from "./Possibility.module.css";
import Featureimg from "../../assets/Feature-Image.png";
const Possibility = () => {
  return (
    <div
      className={`${styles.gpt3_possibility_container} ${styles.section_padding}`}
      id="openai"
    >
      <div className={styles.possibilityimg_container}>
        <img src={Featureimg}></img>
      </div>
      <div className={styles.possibilitytext_container}>
        <h4>Request Early Access to Get Started</h4>
        <h1>The possibilities are beyond your imagination</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
