import React from "react";
import styles from "./styles.module.css";

const Index = () => {
  return (
    <div className={styles.height100vh}>
      <div className={styles.container}>
        <div className={styles.RowFlex}>
          <div className={styles.W70}>
            <h1>Science</h1>
            <h2>A human endeavor.</h2>
            <h3>Pharma, Meet Nature</h3>
            <div className={styles.W80}>
              <p>
                Bruno MD is committed to furthering our understanding of the
                power of natural substances to improve human health and
                longevity. This goal is a moving target. One not easily
                achieved. Nature is not always willing to show us her hand.
              </p>
              <p>
                Pharmacology is another path to improving human health, and
                Bruno also does this.
              </p>
            </div>
            <div>
                <button className={styles.ReadMoreBtn}>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
