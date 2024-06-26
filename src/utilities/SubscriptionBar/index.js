import React from "react";
import styles from "./styles.module.css";
const SubscriptionBar = ({
  content,
  ModalHandler,
  active,
  themed = false,
  themea = false,
}) => {
  if (themed) {
    return (
      <section
        className={styles.SubscriptionBar}
        id="themed"
        style={{ background: themed }}
      >
        <div className={styles.SubscriptoionInner}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.colxl7Themed}>
                <p
                  className={`${styles.firstLineHeader} ${
                    styles.themedTextWhite
                  } ${content.fontLayout && styles.themedTextWhiteFont} ${
                    content.fontLayout && styles.themedFirstLineHeader
                  }`}
                  style={
                    themea
                      ? { fontWeight: "bolder", color: themea }
                      : { fontWeight: "bolder" }
                  }
                >
                  {content.title1}
                </p>
                <p
                  className={`${styles.secondLineHeader}  ${
                    styles.themedTextWhite
                  } ${content.fontLayout && styles.themedTextWhiteFont}`}
                >
                  {content.title2}
                </p>
              </div>
              <div className={styles.colxl5Themed}>
                <div className={styles.SubOneTime}>
                  <div
                    className={
                      active == "Subscribe" ? styles.button04 : styles.button03
                    }
                    style={active == "Subscribe" ? { color: themed } : {}}
                    onClick={ModalHandler}
                    data-value="Subscribe"
                  >
                    <div data-value="Subscribe">
                      <p
                        className={styles.priceCross}
                        data-value="Subscribe"
                        style={active == "Subscribe" ? { color: themed } : {}}
                      >
                        ${content.subscriptionBox.price.toFixed(2)}
                      </p>
                    </div>
                    <div className={styles.btnText} data-value="Subscribe">
                      <div data-value="Subscribe">
                        {content?.subscriptionBox?.buttonText?.map((e, i) => {
                          return (
                            <p key={i} data-value="Subscribe">
                              {e}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      active != "Subscribe" ? styles.button04 : styles.button03
                    }
                    style={active == "Subscribe" ? { background: themea } : {}}
                    onClick={ModalHandler}
                  >
                    <div>
                      <p className={styles.priceCross}>
                        ${content.onetimeBox.price.toFixed(2)}
                      </p>
                    </div>
                    <div className={styles.btnText}>
                      <div>
                        {content?.onetimeBox?.buttonText?.map((e, i) => {
                          return <p key={i}>{e}</p>;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className={styles.SubscriptionBar}>
        <div className={styles.SubscriptoionInner}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.colxl7}>
                <div className="codeAutomaticaly">
                  <p className={styles.firstLineHeader}>{content.title1}</p>
                  <p className={styles.secondLineHeader}>{content.title2}</p>
                </div>
              </div>
              <div className={styles.colxl5}>
                <div className={styles.SubOneTime}>
                  <div
                    className={
                      active == "Subscribe" ? styles.button02 : styles.button01
                    }
                    onClick={ModalHandler}
                    data-value="Subscribe"
                  >
                    <div data-value="Subscribe">
                      <p className={styles.priceCross} data-value="Subscribe">
                        ${content.subscriptionBox.price}
                      </p>
                    </div>
                    <div className={styles.btnText} data-value="Subscribe">
                      <div data-value="Subscribe">
                        {content?.subscriptionBox?.buttonText?.map((e, i) => {
                          return (
                            <p key={i} data-value="Subscribe">
                              {e}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      active != "Subscribe" ? styles.button02 : styles.button01
                    }
                    onClick={ModalHandler}
                  >
                    <div>
                      <p className={styles.priceCross}>
                        ${content.onetimeBox.price}
                      </p>
                    </div>
                    <div className={styles.btnText}>
                      <div>
                        {content?.onetimeBox?.buttonText?.map((e, i) => {
                          return <p key={i}>{e}</p>;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};
export default SubscriptionBar;
