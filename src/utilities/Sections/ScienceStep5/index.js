import React from "react";
import styles from "./styles.module.css";

const Index = () => {
  return (
    <div className={styles.height100vh}>
      <div className={styles.container}>
        <div className={styles.RowFlex}>
          <div className={styles.W70}>
            <h1>Nature,</h1>
            <h2>Meet Pharma.</h2>
            <h3>Clinically Proven Ingredients</h3>
            <div className={styles.W80}>
              <p>
                When a company makes a claim, it should be transparent and
                verifiable. Because we are both a pharmacological company and a
                nutritional supplement company, Bruno MD applies the same
                principled methods for safety, provenance, and effectiveness on
                all of our products...
              </p>
            </div>
            <div>
              <button className={styles.ReadMoreBtnWhite} >Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
