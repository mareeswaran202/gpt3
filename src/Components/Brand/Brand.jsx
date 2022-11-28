import React from "react";
import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import bitmap from "../../assets/Bitmap.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";
import styles from "./Brand.module.css";

const Brand = () => {
  return (
    <div className={`${styles.brand_container} ${styles.section_padding}`}>
      <div>
        <img src={google} alt="Google" style={{ width: 71, height: 24 }}></img>
      </div>
      <div>
        <img src={slack} alt="Slack" style={{ width: 96, height: 24 }}></img>
      </div>
      <div>
        <img src={bitmap} alt="bitmap" style={{ width: 113, height: 24 }}></img>
      </div>
      <div>
        <img
          src={dropbox}
          alt="dropbox"
          style={{ width: 121, height: 24 }}
        ></img>
      </div>
      <div>
        <img
          src={shopify}
          alt="Shopify"
          style={{ width: 85, height: 24 }}
        ></img>
      </div>
    </div>
  );
};

export default Brand;
