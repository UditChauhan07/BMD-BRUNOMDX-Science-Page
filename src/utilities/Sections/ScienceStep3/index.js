import React from "react";
import styles from "./style.module.css";
import { Link } from 'react-scroll';

const Index = () => {
  return (
    <div id="section06" className={styles.height100vh}>
      <div className={styles.container}>
        <div className={styles.RowFlex}>
          <div className={styles.W70}>
            <h1>Blue Zone</h1>
            <h2>Longevity.</h2>
            <h3>Live Healthier, Longer Lives</h3>
            <div className={styles.W80}>
              <p>
                Many pharmacological companies are scaled international
                conglomerates. The names of these companies are familiar and,
                unfortunately, are often known for being as impersonal as they
                are innovative.
                <br></br>
                <br></br>
                Bruno MD, an Italian company based in Rome, is a family-owned
                operation that allows the company to innovate from a different
                perspective.
              </p>
             
            </div>
            <div>
              <button className={styles.ReadMoreBtn}>Read More</button>
            </div>
          </div>
        </div>
      <Link activeClass="active" to="section07" spy={true} smooth={true}
                            duration={500}
            >
              <div className={styles.arrowcontrol}>
                <div className={styles.arrowBox}></div>
              </div>
              </Link>
      </div>

    </div>
  );
};

export default Index;
