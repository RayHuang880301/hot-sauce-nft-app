import React from "react";
import styles from "./Header.module.scss";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import Link from "next/link";
import { Image } from "@chakra-ui/react";
import iconImg from "../../assets/icon.png";
import { UrlObject } from "url";

declare type Url = string | UrlObject;

export default function Header() {
	return (
		<div className={styles.header}>
			<Image src={iconImg.src} width="75px" alt="icon" />
			<div className={styles.box}>
				<div className={styles.selector}>
					<Link href="#intro">
						<div className={styles.btn}>About</div>
					</Link>
					<Link href="#mint">
						<div className={styles.btn}>Mint</div>
					</Link>
					<Link href="#mdd">
						<div className={styles.btn}>Team</div>
					</Link>
					<Link href="#faq">
						<div className={styles.btn}>FAQs</div>
					</Link>
				</div>
				<ConnectButton />
			</div>
		</div>
	);
}
