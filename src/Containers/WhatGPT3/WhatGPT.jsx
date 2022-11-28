import React from "react";
import styles from "./WhatGTP.module.css";
import Feature from "../../Components/Feature/Feature";
const WhatGPT = () => {
  return (
    <div
      className={`${styles.gpte_whatgpt3} ${styles.section_margin}`}
      id="whatgpt"
    >
      <div className={styles.feature_container}>
        <Feature
          title="What is GPT-3"
          desc="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        ></Feature>
      </div>
      <div className={styles.gpte_highletedtxt}>
        <h1>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className={styles.gpte_featurefooter}>
        <Feature
          title="Chatbots"
          desc="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        ></Feature>

        <Feature
          title="Knowledgebase"
          desc="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        ></Feature>

        <Feature
          title="Education"
          desc="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        ></Feature>
      </div>
    </div>
  );
};

export default WhatGPT;
