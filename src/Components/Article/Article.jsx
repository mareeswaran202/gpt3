import React from "react";
import styles from "./Article.module.css";
const Article = (props) => {
  return (
    <div className={styles.article_container}>
      <div className={styles.article_imgcontainer}>
        <img src={props.imgsrc}></img>
      </div>
      <div className={styles.blogcontenttxt}>
        <time>{props.time}</time>
        <h3>{props.title}</h3>
      </div>
      <a href="">Read Full Article</a>
    </div>
  );
};

export default Article;
