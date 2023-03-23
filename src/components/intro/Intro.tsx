import React from "react";
import styles from "./Intro.module.scss";
import { Image } from "@chakra-ui/react";
import rectImg from "../../assets/rect.png";
import nftVideo from "../../assets/nftVideo.gif";
import i18n from '../../i18n/i18n';

export default function Intro() {
  const { t } = i18n;
  return (
    <div id="intro" className={styles.section}>
      <div></div>
      <div className={styles.container}>
        <div className={styles.videoBox}>
          <Image className={styles.videoItem} src={nftVideo.src}></Image>
          <div className={styles.videoMarquee}>
            <div className={styles.videoMarqueeItem}>
              <img src="/nft1.gif" />
              <img src="/nft2.gif" />
              <img src="/nft3.gif" />
              <img src="/nft4.gif" />
              <img src="/nft1.gif" />
              <img src="/nft2.gif" />
              <img src="/nft3.gif" />
              <img src="/nft4.gif" />
            </div>
            <div className={styles.videoMarqueeItem}>
              <img src="/nft4.gif" />
              <img src="/nft3.gif" />
              <img src="/nft2.gif" />
              <img src="/nft1.gif" />
              <img src="/nft4.gif" />
              <img src="/nft3.gif" />
              <img src="/nft2.gif" />
              <img src="/nft1.gif" />
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <h1>{t('What is the HOT SAUCE NFT?')}</h1>
          <p>
            {t('The HOT SAUCE NFT is a digital non-fungible token (NFT) representing MDD\'s newest EP HOT SAUCE. Each NFT features unique, hand-drawn animated artwork, with custom remixed music from the HOT SAUCE EP.')}
            <br />
            <br />
            {t('There are 7 unique NFTs and only 333 of each NFT will ever be minted.')}
            <br />
            <br />
            {t('Each purchase of a HOT SAUCE NFT supports MDD to create exciting new music.')}
          </p>
        </div>
      </div>
    </div>
  );
}
