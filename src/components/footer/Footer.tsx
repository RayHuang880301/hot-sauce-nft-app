import React from "react";
import styles from "./Footer.module.scss";
import { Image } from "@chakra-ui/react";
import iconFooter from "../../assets/iconFooter.png";
import emailImg from "../../assets/email.svg";
import igImg from "../../assets/ig.svg";
import webImg from "../../assets/web.svg";
import i18n from '../../i18n/i18n';

export default function Footer() {
  return (
    <div className={styles.container}>
      <Image src={iconFooter.src} width="120px" alt="icon" />
      <div className={styles.contactBox}>
        <div className={styles.iconBox}>
          <Image
            className={styles.img}
            src={emailImg.src}
            alt="icon"
            transition="all 0.2s ease-in-out"
            cursor={"pointer"}
            _hover={{ transform: "scale(1.1)" }}
            _active={{ transform: "scale(0.9)" }}
          />
          <Image
            className={styles.img}
            src={igImg.src}
            alt="icon"
            transition="all 0.2s ease-in-out"
            cursor={"pointer"}
            _hover={{ transform: "scale(1.1)" }}
            _active={{ transform: "scale(0.9)" }}
          />
          <Image
            className={styles.img}
            src={webImg.src}
            alt="icon"
            transition="all 0.2s ease-in-out"
            cursor={"pointer"}
            _hover={{ transform: "scale(1.1)" }}
            _active={{ transform: "scale(0.9)" }}
          />
        </div>
        <p>Support: service@plutolab.io</p>
        {/* <p>© 2021 HOT SAUCE NFT</p> */}
      </div>
    </div>
  );
}
