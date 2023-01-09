import React, { useState } from "react";
import styles from "./Faq.module.scss";
import faqJSON from "../../assets/faq.json";
import { Image } from "@chakra-ui/react";
import pinkCircleImg from "../../assets/pinkCircle.svg";
import pinkVectorImg from "../../assets/pinkVector.svg";
import redCircleImg from "../../assets/redCircle.svg";
import redVectorImg from "../../assets/redVector.svg";

export default function Faq() {
	const [questionIdx, setQuestionIdx] = useState(0);
	return (
		<div id="faq" className={styles.section}>
			<div className={styles.container}>
				<h1 className={styles.title}>FAQs</h1>
				<div className={styles.box}>
					<div className={styles.questionBox}>
						{faqJSON.map((faq, idx) => (
							<div
								key={idx}
								className={styles.questionItem}
								style={
									idx === questionIdx ? { backgroundColor: "#5C5C5C" } : {}
								}
								onClick={() => setQuestionIdx(idx)}
							>
								<h2 className={styles.text}>
									<Image
										className={styles.circleImg}
										src={
											idx === questionIdx ? redCircleImg.src : pinkCircleImg.src
										}
										alt="img"
									/>
									{faq.question}
								</h2>
								<Image
									className={styles.vectorImg}
									src={
										idx === questionIdx ? redVectorImg.src : pinkVectorImg.src
									}
									alt="img"
								/>
							</div>
						))}
					</div>
					<div className={styles.answerBox}>
						<div className={styles.word}>
							<h2 className={styles.text}>{faqJSON[questionIdx].question}</h2>
							<p className={styles.text}>{faqJSON[questionIdx].answer}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
