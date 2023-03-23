import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import navIcon from "../../assets/navIcon.svg";
import iconImg from "../../assets/icon.png";
import closeIcon from "../../assets/closeIcon.svg";
import { UrlObject } from "url";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { useDeviceDetect } from "../../utils/mediaQuery";
import i18n from '../../i18n/i18n';

export default function Header() {
  const { t } = i18n;

  const { isTabletOrMobile } = useDeviceDetect();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    onClose();
  }
  return (
    <div className={styles.header}>
      <Image
        src={iconImg.src}
        width="70px"
        alt="icon"
        transition="all 0.2s ease-in-out"
        cursor={"pointer"}
        _hover={{ transform: "scale(1.1)" }}
      />
      {isTabletOrMobile ? (
        <div className={styles.boxMobile}>
          <ConnectButton />
          <Image
            className={styles.navIcon}
            src={navIcon.src}
            onClick={onOpen}
            width="35px"
            alt="icon"
          />
        </div>
      ) : (
        <div className={styles.box}>
          <div className={styles.selector}>
            <Link href="#intro">
              <Box className={styles.btn}>{t('About')}</Box>
            </Link>
            <Link href="#mint">
              <Box className={styles.btn}>{t('Mint')}</Box>
            </Link>
            <Link href="#mdd">
              <Box className={styles.btn}>{t('Team')}</Box>
            </Link>
            <Link href="#faq">
              <Box className={styles.btn}>{t('FAQs')}</Box>
            </Link>
            <Link href="#" onClick={() => changeLang('en')}>
              <Box className={styles.btn}>English</Box>
            </Link>
            <Link href="#" onClick={() => changeLang('zh')}>
              <Box className={styles.btn}>繁體中文</Box>
            </Link>
          </div>
          <ConnectButton />
        </div>
      )}

      <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
        <DrawerOverlay className={styles.drawerContent} />
        <DrawerContent>
          <DrawerHeader className={styles.drawerHeader}>
            <Image src={iconImg.src} width="80px" alt="icon" />
            <Image
              src={closeIcon.src}
              width="20px"
              alt="icon"
              onClick={onClose}
            />
          </DrawerHeader>
          <DrawerBody className={styles.drawerBody}>
            <Link href="#intro">
              <div className={styles.btn} onClick={onClose}>
                {t('About')}
              </div>
            </Link>
            <Link href="#mint">
              <div className={styles.btn} onClick={onClose}>
                {t('Mint')}
              </div>
            </Link>
            <Link href="#mdd">
              <div className={styles.btn} onClick={onClose}>
                {t('MDD')}
              </div>
            </Link>
            <Link href="#faq">
              <div className={styles.btn} onClick={onClose}>
                {t('FAQs')}
              </div>
            </Link>
            <Link href="#">
              <div className={styles.btn} onClick={() => changeLang('en')}>
                English
              </div>
            </Link>
            <Link href="#">
              <div className={styles.btn} onClick={() => changeLang('zh')}>
                繁體中文
              </div>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
