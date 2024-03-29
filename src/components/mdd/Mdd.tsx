import React from "react";
import styles from "./Mdd.module.scss";
import { Image } from "@chakra-ui/react";
import mddImg from "../../assets/mdd.png";
import twitterLogo from "../../assets/twLogo.svg";
import dcLogo from "../../assets/dcLogo.svg";
import { useDeviceDetect } from "../../utils/mediaQuery";
import i18n from '../../i18n/i18n';

export default function Mdd() {
  const { t } = i18n;
  const { isTabletOrMobile } = useDeviceDetect();
  return (
    <div id="mdd" className={styles.section}>
      <div className={styles.container}>
        <Image
          className={styles.img}
          src={mddImg.src}
          width="450px"
          alt="mdd"
          transition={"all 0.5s ease"}
          _hover={{
            transform: "scale(1.05)",
          }}
        />
        <div className={styles.Box}>
          <h1>
            Who is MDD?
            {isTabletOrMobile ? (
              <div className={styles.mediaBox}>
                <Image
                  className={styles.icon}
                  src={twitterLogo.src}
                  width="30px"
                  alt="twitter"
                />
                <Image
                  className={styles.icon}
                  src={dcLogo.src}
                  width="30px"
                  alt="discord"
                />
              </div>
            ) : (
              <></>
            )}
          </h1>
          <p>
            {t('周立銘 MDD, formerly known as MACHI DIDI, is a Taiwanese-American musician, DJ, and producer.')}
            <br /> {t('Coming to fame in 2003 with the group Machi, he is now a solo artist, performing his music at nightclubs and music festivals in Asia. Besides his own solo projects, he has produced music for many high-profile artists. His music has amassed tens of millions of streams across Spotify, KKbox, Youtube, and other platforms.')}
            <br />
            {t('Only two things interest MDD - music and crypto.')}
            <br />
            {t('By showing your support and minting a limited edition HOT SAUCE NFT,  we can further the vision to combine music and blockchain technology  to advance music culture.')}
          </p>
          {isTabletOrMobile ? (
            <></>
          ) : (
            <div className={styles.mediaBox}>
              <Image
                className={styles.icon}
                src={twitterLogo.src}
                alt="twitter"
                transition={"all 0.2s ease"}
                _hover={{
                  transform: "scale(1.1)",
                }}
              />
              <Image
                className={styles.icon}
                src={dcLogo.src}
                alt="discord"
                transition={"all 0.2s ease"}
                _hover={{
                  transform: "scale(1.1)",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
