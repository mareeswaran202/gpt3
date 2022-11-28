import React from "react";
import styles from "./Blog.module.css";
import Article from "../../Components/Article/Article";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import blog4 from "../../assets/blog4.png";
import blog5 from "../../assets/blog5.png";
const blog = () => {
  return (
    <div className={`${styles.gpt3_blogcontainer} ${styles.section_padding}`}>
      <div className={styles.gpt3_blogcontainerheading}>
        <h1>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className={styles.blog_container}>
        <div className={styles.gpt3_bloginner_containera}>
          <Article
            imgsrc={blog1}
            time={"Sep 26, 2021"}
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          ></Article>
        </div>
        <div className={styles.gpt3_bloginner_containerb}>
          <Article
            imgsrc={blog2}
            time={"Sep 26, 2021"}
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          ></Article>
          <Article
            imgsrc={blog3}
            time={"Sep 26, 2021"}
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          ></Article>
          <Article
            imgsrc={blog4}
            time={"Sep 26, 2021"}
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          ></Article>
          <Article
            imgsrc={blog5}
            time={"Sep 26, 2021"}
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          ></Article>
        </div>
      </div>
    </div>
  );
};

export default blog;
