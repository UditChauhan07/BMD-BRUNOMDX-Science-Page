import React from "react";
import styles from "./style.module.css";

const Index = () => {
  return (
    <div>
      <div className={styles.height100vh}>
        <div className={styles.container}>
          <div className={styles.RowFlex}>
            <div className={styles.W70}>
              <div className={styles.Mask}>
                <h1>Farm to Table.</h1>
              </div>
              <h3>Rooted in Italian Soil</h3>
              <div className={styles.W80}>
                <p>
                  If you take supplements, you should be aware that the
                  ingredients you consume, such as Vitamin C or E, are often
                  produced in a lab and not harvested from natural sources.
                  While these compounds appear identical to their naturally
                  derived counterparts on a molecular level...
                </p>
              </div>
              <div>
                <button className={styles.ReadMoreBtnWhite}>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
