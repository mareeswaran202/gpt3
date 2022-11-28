import React from "react";
import styles from "./Header.module.css";
import people from "../../assets/people.png";
import headerimg from "../../assets/headerimg.png";

const Header = () => {
  return (
    <div className={`${styles.header} ${styles.section_padding}`} id="home">
      <div className={styles.header_content}>
        <h1 className={styles.gradiant_txt}>
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className={styles.gpt3_emailbox}>
          <input type="email" placeholder="Your Email Address"></input>
          <button>Get Started</button>
        </div>
        <div className={styles.gpt3__people}>
          <img src={people} alt="people"></img>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className={styles.header_image}>
        <img src={headerimg} alt="Main-banner"></img>
      </div>
    </div>
  );
};

export default Header;
