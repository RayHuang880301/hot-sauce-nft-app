import React from "react";
import styles from "./Faq.module.scss";
import faqJSON from "../../assets/faq.json";
import { Image } from "@chakra-ui/react";
import pinkCircleImg from "../../assets/pinkCircle.svg";
import pinkVectorImg from "../../assets/pinkVector.svg";

export default function Faq() {
	return (
		<div className={styles.section}>
			<div className={styles.container}>
				<h1 className={styles.title}>FAQs</h1>
				<div className={styles.box}>
					<div className={styles.questionBox}>
						{faqJSON.map((faq, idx) => (
							<div key={idx} className={styles.questionItem}>
								<Image
									className={styles.circleImg}
									src={pinkCircleImg.src}
									alt="img"
								/>
								<h2>{faq.question}</h2>
								<Image
									className={styles.vectorImg}
									src={pinkVectorImg.src}
									alt="img"
								/>
							</div>
						))}
					</div>
					<div className={styles.answerBox}></div>
				</div>
			</div>
		</div>
	);
}
