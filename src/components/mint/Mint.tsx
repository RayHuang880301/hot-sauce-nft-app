import React from "react";
import styles from "./Mint.module.scss";
import { Button, Image } from "@chakra-ui/react";
import nftImg from "../../assets/nft.gif";

export default function Mint() {
  return (
    <div id="mint" className={styles.section}>
      <div></div>
      <div className={styles.container}>
        <Image
          className={styles.img}
          src={nftImg.src}
          width="400px"
          alt="nftImg"
          transition={"all 0.2s ease-in-out"}
          _hover={{
            transform: "scale(1.05)",
          }}
        />
        <div className={styles.Box}>
          <h1>How do I purchase a HOT SAUCE NFT?</h1>
          <p>
            HOT SAUCE NFTs are only available to mint at *website*. After
            minting, owners can list their NFT for resale secondary marketplace
            (Opensea).
            <br />
            <br />
            Each limited edition NFT can be minted until it is sold out. Then
            the next limited edition NFT will be available for minting. Owners
            of all 7 NFTs will be airdropped a unique interactive NFT.
            <br />
            <br />
            Users can pay with ETH or Paypal. The price to mint is 0.05 ETH
          </p>
          <div className={styles.btnBox}>
            <Button className={styles.btn}>Mint</Button>
            {/* <Button className={styles.btn}>Mint by VISA</Button> */}
          </div>
        </div>
      </div>
      <div className={styles.marquee}>
        <div>
          <span>Hot Sauce NFT</span>
          <span>Hot Sauce NFT</span>
          <span>Hot Sauce NFT</span>
          <span>Hot Sauce NFT</span>
          <span>Hot Sauce NFT</span>
          <span>Hot Sauce NFT</span>
          <span>Hot Sauce NFT</span>
          <span>Hot Sauce NFT</span>
          <span>Hot Sauce NFT</span>
          <span>Hot Sauce NFT</span>
          <span>Hot Sauce NFT</span>
        </div>
      </div>
    </div>
  );
}
