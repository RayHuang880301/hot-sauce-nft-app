import React from "react";
import styles from "./Pluto.module.scss";
import { Button, Image } from "@chakra-ui/react";
import plutoLogo from "../../assets/plutoLogo.png";
import Footer from "../footer/Footer";
import Link from "next/link";

export default function Pluto() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <span className={styles.h1}>Powered by PlutoLab</span>
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
          With the theme of interactive music NFT, Pluto Lab is committed to
          developing a community of music lovers in the web3 and NFT world.
        </span>
        <Link href="https://plutolab.io/" target="_blank">
          <Button className={styles.btn}>More About Pluto</Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
