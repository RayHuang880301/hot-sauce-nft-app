import React, { useState } from "react";
import styles from "./Faq.module.scss";
import faqJSON from "../../data/faq.json";
import { Box, Image } from "@chakra-ui/react";
import pinkCircleImg from "../../assets/pinkCircle.svg";
import pinkVectorImg from "../../assets/pinkVector.svg";
import redCircleImg from "../../assets/redCircle.svg";
import redVectorImg from "../../assets/redVector.svg";
import i18n from '../../i18n/i18n';

export default function Faq() {
  const { t } = i18n;

  const [questionIdx, setQuestionIdx] = useState(0);
  return (
    <div id="faq" className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t('FAQs')}</h1>
        <div className={styles.box}>
          <div className={styles.questionBox}>
            {faqJSON.map((faq, idx) => (
              <Box
                key={idx}
                className={styles.questionItem}
                style={
                  idx === questionIdx ? { backgroundColor: "#5C5C5C" } : {}
                }
                onClick={() => setQuestionIdx(idx)}
                transition={"all 0.2s ease-in-out"}
                _hover={{
                  transform: "scale(1.1)",
                }}
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
              </Box>
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
