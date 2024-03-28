import React, { useEffect, useState } from "react";
import scienza from "../../json/scienza.json";
import PageHead from "@/utilities/Head";
import SEO from "../../json/SEO.json";
import MasterHeadImg from "@/utilities/MasterHeadImg";
import { WistiaHero } from "@/utilities/WistiaHero";
import ScienceStep1 from "@/utilities/Sections/ScienceStep1";
import ScienceStep2 from "@/utilities/Sections/ScienceStep2";
import ScienceStep3 from "@/utilities/Sections/ScienceStep3";
import ScienceStep4 from "@/utilities/Sections/ScienceStep4";
import ScienceStep5 from "@/utilities/Sections/ScienceStep5";
import Styles from "../styles/scienceNew.module.css";
import ScrollToTop from "@/utilities/ScrollToTop";
const ScienceNew = ({ version }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { masterHead, Step01, Step02, Step03, Step04, Step05 } =
    scienza[version] || {};

  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const moveinX = (e.pageX * -1) / 100;
    const moveinY = (e.pageY * -1) / 100;
    setBackgroundPosition({ x: moveinX, y: moveinY });
  };
  const goToNav = ()=>{
    document.getElementById('ScrollRight').scrollTo(0, 500);
  }

  return (
    <section>
      <div id="ScrollRight" className={Styles.ScrollContainer}>
        <div className={Styles.ScrollArea} id="section001">
          <ScrollToTop/>
          <PageHead content={SEO[version].science?.SEO} />
          {masterHead.video ? (
            <WistiaHero
              className={Styles.BgRed}
              content={masterHead?.content}
              video={masterHead.video}
            />
          ) : (
            <MasterHeadImg data={masterHead} />
          )}
          <section id="section03" className={Styles.demo}>
            <a onClick={()=>goToNav()}>
              <div className={Styles.arrowcontrol}>
                <div className={Styles.arrowBox}></div>
              </div>
            </a>
          </section>
        </div>

        <div
          id="section04"
          className={Styles.ScrollArea}
          // onMouseMove={handleMouseMove}
          // style={{
          //   backgroundPosition: `${backgroundPosition.x}px ${backgroundPosition.y}px`,
          // }}
        >
          <ScienceStep1 data={Step01} />
        </div>

        <div className={Styles.ScrollArea}>
          <ScienceStep2 data={Step02} />
        </div>
        <div className={Styles.ScrollArea}>
          <ScienceStep3 data={Step03} />
        </div>
        <div className={Styles.ScrollArea}>
          <ScienceStep4 data={Step04} />
        </div>
        <div className={Styles.ScrollArea}>
          <ScienceStep5 data={Step05} />
        </div>
      </div>
    </section>
  );
};

export default ScienceNew;
