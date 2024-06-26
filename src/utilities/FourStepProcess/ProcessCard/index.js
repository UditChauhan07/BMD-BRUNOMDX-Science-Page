import React, { useRef, useState } from "react";
import styles from "./styles.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "../accordion";
import VideoPlayer from "@/utilities/Video";

const ProcessCard = ({
  stepNumber,
  image,
  imageAltText,
  title,
  bodyCopy,
  video,
  expandedCopy,
  titleColor,
  stepAlignment,
  buttonTittle,
  arrowColor,
  isFontLayout = false,
}) => {
  if (!buttonTittle) buttonTittle = "LEARN MORE";
  React.useEffect(() => {
    let more = document.getElementsByClassName("accordionColor");
    console.log({ more });
    if (more) {
      more.style = `color:${titleColor}`;
    }
  }, []);

  return (
    <div className={styles.processCard}>
      {stepAlignment ? (
        <div
          className={styles.stepNumber}
          style={
            video
              ? { color: titleColor, left: "auto", right: "30px", top: "-10px" }
              : { color: titleColor, left: "auto", right: "30px" }
          }
        >
          {" "}
          {stepNumber}{" "}
        </div>
      ) : (
        <div
          className={styles.stepNumber}
          style={
            video ? { color: titleColor, top: "-45px" } : { color: titleColor }
          }
        >
          {" "}
          {stepNumber}{" "}
        </div>
      )}
      {video ? (
        <div className={styles.processVideo}>
          <VideoPlayer
            style={{
              top: "30%",
              backgroundColor: titleColor,
            }}
            video={video}
            id={title}
            paddingTop="35px"
          />
        </div>
      ) : (
        <img
          src={image}
          className={styles.processImage}
          alt={title}
          width={400}
          height={267}
        />
      )}
      <h3
        className={
          isFontLayout ? styles.processTitleIsLayout : styles.processTitle
        }
        style={{ color: titleColor }}
      >
        {title}
      </h3>
      <p className={styles.processBody}>{bodyCopy}</p>
      <Accordion allowMultiple className={styles.accordion}>
        <AccordionItem className={styles.accordionItem}>
          <AccordionButton
            className={`${styles.accordionButton} ${
              !isFontLayout && styles.widthNotFull
            }`}
          >
            <p
              style={
                isFontLayout
                  ? { color: titleColor }
                  : { fontFamily: "none", color: titleColor }
              }
            >
              {buttonTittle}
            </p>
            <div
              className={styles.accordionColor}
              style={{ color: titleColor }}
            >
              <AccordionIcon
                variant="arrow-default"
                className={styles.accordionIcon}
              />
            </div>
          </AccordionButton>
          <AccordionPanel className={styles.accordionPanel}>
            <div>{expandedCopy}</div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProcessCard;
