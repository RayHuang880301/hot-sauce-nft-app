import React from "react";
import styles from "./main.module.scss";
import { Image } from "@chakra-ui/react";
import Header from "../header/Header";
import bottleImg from "../../assets/bottle.gif";
import arrowImg from "../../assets/arrow.svg";
import i18n from '../../i18n/i18n';

export default function Main() {
	const { t } = i18n;
	return (
		<div className={styles.section}>
			<Header />
			<div className={styles.content}>
				<div></div>
				{/* <div className={styles.imgBox}> */}
					<Image src={bottleImg.src} width="400px" alt="bottle" />
				{/* </div> */}
				<div className={styles.box}>
					<h1>{t('Scroll Down')}</h1>
					<Image src={arrowImg.src} alt="arrow" />
				</div>
			</div>
		</div>
	);
}
