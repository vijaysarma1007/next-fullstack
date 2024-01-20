import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/models";
export default function Postcard({ post }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>{post.img && <Image src={post.img} alt="post image" fill className={styles.img} />}</div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.button}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link href={`/blog/${post.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}
