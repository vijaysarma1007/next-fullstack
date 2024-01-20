import React from "react";
import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";

const getData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("something went wrong");
  }

  return res.json();
};

export default async function PostUser({ userId }) {
  // console.log(userId);
  const user = await getUser(userId);
  // console.log("specific user", user);
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user?.username}</span>
    </div>
  );
}
