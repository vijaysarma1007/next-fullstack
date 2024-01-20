import React from "react";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";

export default async function NavBar() {
  const session = await auth();
  console.log(session);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>logo</div>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
}
