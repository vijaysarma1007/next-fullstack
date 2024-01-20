import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "Contact description",
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>We create digital ideas thatare bigger , bolder, braver and better.</h1>
        <p className={styles.desc}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="about image" fill className={styles.img} />
      </div>
    </div>
  );
}
