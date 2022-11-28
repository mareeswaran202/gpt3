import React from "react";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [togglemenu, Settogglemenu] = useState(false);
  function ShowmenuOpenicon() {
    Settogglemenu(!togglemenu);
  }

  return (
    <div className={styles.gpt3_navbar}>
      <div className={styles.gpte_navbar_links}>
        <div className={styles.gpte_navbar_logo}>
          <img src={logo} alt="logo" className={styles.gpte_navbar_logoimg} />
        </div>
        <div className={styles.gpt3_navbar_links_container}>
          <p className={styles.gpt3_navbar_links_containerele}>
            <a href="#home">Home</a>
          </p>
          <p className={styles.gpt3_navbar_links_containerele}>
            <a href="#whatgpt">What is GPT</a>
          </p>
          <p className={styles.gpt3_navbar_links_containerele}>
            <a href="#openai">Open AI</a>
          </p>
          <p className={styles.gpt3_navbar_links_containerele}>
            <a href="#casestudy">Case Studies</a>
          </p>
          <p className={styles.gpt3_navbar_links_containerele}>
            <a href="#library">Library</a>
          </p>
        </div>
      </div>
      <div className={styles.gpt3_navbar_links_signin}>
        <p className={styles.gpt3_navbar_links_signinpara}>
          <a href="#whatgpt">Sign in</a>
        </p>
        <button className={styles.signupbtn} onClick={ShowmenuOpenicon}>
          Sign up
        </button>
      </div>
      <div className={styles.mobilemenu}>
        <button onClick={ShowmenuOpenicon} className={styles.menuicon}>
          {togglemenu ? (
            <RiCloseLine></RiCloseLine>
          ) : (
            <RiMenu3Line color="#00b0f0"></RiMenu3Line>
          )}
        </button>
        {togglemenu && (
          <div
            className={`${styles.scale_up_center} ${styles.mobile_menu_container}`}
          >
            <div>
              <p className={styles.mobile_menu_container_links}>
                <a href="#home">Home</a>
              </p>
              <p className={styles.mobile_menu_container_links}>
                <a href="#wgpt3">What is GPT3?</a>
              </p>
              <p className={styles.mobile_menu_container_links}>
                <a href="#possibility">Open AI</a>
              </p>
              <p className={styles.mobile_menu_container_links}>
                <a href="#features">Case Studies</a>
              </p>
              <p className={styles.mobile_menu_container_links}>
                <a href="#blog">Library</a>
              </p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p className={styles.mobile_menu_container_links}>
                <a href="#blog">Sign in</a>
              </p>
              <button type="button" className={styles.signupbtn}>
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
