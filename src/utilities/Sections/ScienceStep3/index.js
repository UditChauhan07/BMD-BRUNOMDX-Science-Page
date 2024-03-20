import React from "react";
import styles from "./style.module.css";

const Index = () => {
  return (
    <div className={styles.height100vh}>
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
              </p>
              <p>
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
      </div>
    </div>
  );
};

export default Index;
