import React from "react";
import styles from "./Mdd.module.scss";
import { Image } from "@chakra-ui/react";
import mddImg from "../../assets/mdd.png";
import twitterLogo from "../../assets/twLogo.svg";
import dcLogo from "../../assets/dcLogo.svg";

export default function Mdd() {
	return (
		<div className={styles.section}>
			<div className={styles.container}>
				<Image
					className={styles.img}
					src={mddImg.src}
					width="450px"
					alt="mdd"
				/>
				<div className={styles.Box}>
					<h1>Who is MDD?</h1>
					<p>
						周立銘 MDD, formerly known as MACHI DIDI, is a Taiwanese-American
						musician, DJ, and producer.
						<br /> Coming to fame in 2003 with the group Machi, he is now a solo
						artist, performing his music at nightclubs and music festivals in
						Asia. Besides his own solo projects, he has produced music for many
						high-profile artists. His music has amassed tens of millions of
						streams across Spotify, KKbox, Youtube, and other platforms.
						<br />
						Only two things interest MDD - music and crypto.
						<br />
						By showing your support and minting a limited edition HOT SAUCE NFT,
						we can further the vision to combine music and blockchain technology
						to advance music culture.
					</p>
					<div className={styles.mediaBox}>
						<Image
							className={styles.icon}
							src={twitterLogo.src}
							alt="twitter"
						/>
						<Image className={styles.icon} src={dcLogo.src} alt="discord" />
					</div>
				</div>
			</div>
		</div>
	);
}
