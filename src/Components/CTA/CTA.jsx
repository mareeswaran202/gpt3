import React from "react";
import styles from "./CTA.module.css";
const CTA = () => {
  return (
    <div className={`${styles.gpt3cta_container}`}>
      <div className={styles.gpt3catext}>
        <p>Request Early Access to Get Started</p>
        <h4>Register today & start exploring the endless possiblities.</h4>
      </div>
      <div className={styles.gpt3cabtn}>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default CTA;
