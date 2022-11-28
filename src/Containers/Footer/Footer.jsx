import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div
      className={`${styles.gpt3_footer_container} ${styles.section_padding}`}
    >
      <div
        className={`${styles.gpt3_footer_contentsec} ${styles.gradiant_txt}`}
      >
        <h1>Do you want to step in to the future before others</h1>
        <button>Request Early Access</button>
      </div>
      <div className={styles.gpt3_footer_linkscontainer}>
        <div className={styles.gpt3_footer_logocontainer}>
          <img src={logo}></img>
          <p>Crechterwoord K12 182 DK Alknjkcb,</p>
          <p> All Rights Reserved</p>
        </div>
        <div className={styles.gpt3_footerlinks}>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className={styles.gpt3_footerlinks}>
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className={styles.gpt3_footerlinks}>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className={styles.gpt3_footerlcopyright}>
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
