"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function NavigationTestPage() {
  const router = useRouter();
  const handeClick = () => {
    console.log("clicked");

    router.push("/");
    // router.replace("/")
    // router.refresh()
    // router.back()
    // router.forward()
  };
  return (
    <div>
      <Link href={"/"} prefetch={false}>
        click here
      </Link>
      <button onClick={handeClick}>write and redirect</button>
    </div>
  );
}
