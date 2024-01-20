import React from "react";
import styles from "./adminPosts.module.css";
import { getPosts } from "@/lib/data";
import Image from "next/image";
import { deletePost } from "@/lib/actions";

export default async function AdminPosts() {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts &&
        posts.map((post) => {
          return (
            <div className={styles.post} key={post.id}>
              <div className={styles.post}>
                <Image src={post.img || "/noavatar.png"} alt="" width={50} height={50} />
                <span className={styles.postTitle}>{post.title}</span>
              </div>
              <form action={deletePost}>
                <input type="hidden" name="id" value={post.id} />
                <button className={styles.postButton}>Delete</button>
              </form>
            </div>
          );
        })}
    </div>
  );
}
