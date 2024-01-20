import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";

// import Hydrationtest from "@/components/Hydrationtest";
const Hydrationtest = dynamic(() => import("@/components/Hydrationtest"), { ssr: false });

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

export default function ContactPage() {
  const b = 1;
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="contact imnage" fill className={styles.img} />
      </div>
      <Hydrationtest />
      <div suppressHydrationWarning>{b}</div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (optional)" />
          <textarea placeholder="Message" cols={30} rows={10}></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
