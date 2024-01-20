import React, { Suspense } from "react";
import styles from "./singlePOst.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error("something went wrong");
//   }

//   return res.json();
// };

export default async function SinglePostPage({ params }) {
  const { slug } = params;
  console.log(slug);
  const post = await getPost(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={post.img} alt="single post imnage" className={styles.img} fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/19709063/pexels-photo-19709063/free-photo-of-closeup-of-a-lotus-bud.jpeg"
            alt="avatar image"
            className={styles.avatar}
            width={50}
            height={50}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt}</span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
}
