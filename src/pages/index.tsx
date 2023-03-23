import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Main from "../components/main/main";
import Intro from "../components/intro/Intro";
import Mint from "../components/mint/Mint";
import Mdd from "../components/mdd/Mdd";
import Footer from "../components/footer/Footer";
import Faq from "../components/faq/Faq";
import Pluto from "../components/pluto/Pluto";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>HOT SAUCE NFT</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Main />
				<Intro />
				<Mint />
				<Mdd />
				<Faq />
				<Pluto />
			</main>
		</>
	);
}
