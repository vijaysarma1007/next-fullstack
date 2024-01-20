"use client";
import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogout } from "@/lib/actions";

export default function Links({ session }) {
  const links = [
    {
      title: "HomePage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const [open, setOpen] = useState(false);

  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.link}>
        {links.map((link) => {
          return <NavLink item={link} key={link.title} />;
        })}
        {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      <Image src="/menu.png" alt="" width={30} height={30} onClick={() => setOpen((prev) => !prev)} className={styles.menubutton} />
      {open && (
        <div className={styles.mobilelinks}>
          {links.map((link) => {
            return <NavLink item={link} key={link.title} />;
          })}
        </div>
      )}
    </div>
  );
}
