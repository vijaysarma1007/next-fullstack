import React from "react";
import styles from "./blog.module.css";
import Postcard from "@/components/postCard/postcard";
import { getPosts } from "@/lib/data";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error("something went wrong");
  }

  return res.json();
};

export default async function BlogPage({ searchParams }) {
  console.log(searchParams);

  // const posts = await getData();
  const posts = await getPosts();
  console.log("all posts", posts);
  return (
    <div className={styles.container}>
      {posts &&
        posts.map((post) => {
          return (
            <div className={styles.post} key={post.id}>
              <Postcard post={post} />
            </div>
          );
        })}
    </div>
  );
}
