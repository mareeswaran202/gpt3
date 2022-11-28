import React from "react";
import styles from "./Features.module.css";
import { Feature } from "../../Components";
const Featuredata = [
  {
    id: "F1",
    title: "Improving end distrusts instantly",
    desc: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    id: "F2",
    title: "Become the tended active",
    desc: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    id: "F3",
    title: "Message or am nothing",
    desc: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    id: "F4",
    title: "Really boy law county",
    desc: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
  },
];
const Features = () => {
  return (
    <React.Fragment>
      <div
        className={`${styles.gpt3__features_container} ${styles.section_padding}`}
      >
        <div className={styles.gpt3__features_heading}>
          <h1>
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h1>
          <p>Request Early Access to Get Started</p>
        </div>
        <div className={styles.gpt3__features_higlights}>
          {Featuredata.map((fitems) => (
            <Feature
              key={fitems.id}
              title={fitems.title}
              desc={fitems.desc}
            ></Feature>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Features;
