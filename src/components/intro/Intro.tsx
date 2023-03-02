import React from "react";
import styles from "./Intro.module.scss";
import { Image } from "@chakra-ui/react";
import rectImg from "../../assets/rect.png";

export default function Intro() {
	return (
		<div id="intro" className={styles.section}>
			<div></div>
			<div className={styles.container}>
				{/* <Image className={styles.img} src={rectImg.src} alt="rectangle" /> */}
				<video className={styles.img} controls autoPlay loop muted>
					<source src="/nft.mov" type="video/mp4"></source>
				</video>
				<div className={styles.box}>
					<h1>What is the HOT SAUCE NFT</h1>
					<p>
						The HOT SAUCE NFT is a digital non-fungible token (NFT) representing
						MDD’s newest EP HOT SAUCE. Each NFT features unique, hand-drawn
						animated artwork, with custom remixed music from the HOT SAUCE EP.
						<br />
						<br />
						There are 7 unique NFTs and only 333 of each NFT will ever be
						minted.
						<br />
						<br />
						Each purchase of a HOT SAUCE NFT supports MDD to create exciting new
						music.
					</p>
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
