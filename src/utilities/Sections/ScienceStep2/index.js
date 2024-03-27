import React from "react";
import styles from "./styles.module.css";

const Index = () => {
  return (
    <div>
      <div className={`${styles.height100vh} ${styles.bg} `}>
        <div className={styles.starField}>
          <div className={styles.layer}></div>
          <div className={styles.layer}></div>
          <div className={styles.layer}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.RowFlex}>
            <div className={styles.W70}>
              <div className={styles.Mask}>
                <h1>Understand the world</h1>
              </div>
              <h3>Unlocking Nature’s Secrets</h3>
              <div className={styles.W80}>
                <p>
                  Polyphenols are compounds in many plant-based foods, such as
                  fruits, vegetables, tea, and wine. They are antioxidants,
                  which means they can help protect our cells from damage caused
                  by free radicals.
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
