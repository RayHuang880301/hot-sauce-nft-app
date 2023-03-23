import React from "react";
import styles from "./Pluto.module.scss";
import { Button, Image } from "@chakra-ui/react";
import plutoLogo from "../../assets/plutoLogo.png";
import Footer from "../footer/Footer";
import Link from "next/link";
import i18n from '../../i18n/i18n';

export default function Pluto() {
  const { t } = i18n;
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <span className={styles.h1}>{t('Powered by PlutoLab')}</span>
        <Image
          src={plutoLogo.src}
          alt="plutoLogo"
          width="150px"
          transition={"all 0.2s ease-in-out"}
          _hover={{
            transform: "scale(1.1)",
          }}
        />
        <span className={styles.des}>
          {t('With the theme of interactive music NFT, Pluto Lab is committed to developing a community of music lovers in the web3 and NFT world.')}
        </span>
        <Link href="https://plutolab.io/" target="_blank">
          <Button
            className={styles.btn}
            transition="all 0.2s ease-in-out"
            cursor={"pointer"}
            _hover={{ transform: "scale(1.1)" }}
            _active={{ transform: "scale(0.9)" }}
          >
            {t('More About Pluto')}
          </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
