import React from "react";
import styles from "./adminUsers.module.css";
import { getUsers } from "@/lib/data";
import { deleteUser } from "@/lib/actions";
import Image from "next/image";

export default async function AdminUsers() {
  const users = await getUsers();

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users &&
        users.map((user) => {
          return (
            <div className={styles.post} key={user.id}>
              <div className={styles.post}>
                <Image src={user.img || "/noavatar.png"} alt="" width={50} height={50} />
                <span className={styles.postTitle}>{user.username}</span>
              </div>
              <form action={deleteUser}>
                <input type="hidden" name="id" value={user.id} />
                <button className={styles.postButton}>Delete</button>
              </form>
            </div>
          );
        })}
    </div>
  );
}
