import React from "react";
import styles from "./Footer.module.scss";
import { Image } from "@chakra-ui/react";
import iconFooter from "../../assets/iconFooter.png";
import emailImg from "../../assets/email.svg";
import igImg from "../../assets/ig.svg";
import webImg from "../../assets/web.svg";

export default function Footer() {
	return (
		<div className={styles.container}>
			<Image src={iconFooter.src} width="150px" alt="icon" />
			<div className={styles.contactBox}>
				<div className={styles.iconBox}>
					<Image className={styles.img} src={emailImg.src} alt="icon" />
					<Image className={styles.img} src={igImg.src} alt="icon" />
					<Image className={styles.img} src={webImg.src} alt="icon" />
				</div>
				<p>Support: service@plutolab.io</p>
				{/* <p>© 2021 HOT SAUCE NFT</p> */}
			</div>
		</div>
	);
}
