"use client";
import React, { useEffect } from "react";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { login } from "@/lib/actions";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginForm() {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form action={formAction} className={styles.form}>
      <input type="email" placeholder="email" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href={"/register"}>
        {"Do not have an account ?"} <b>Sign Up</b>
      </Link>
    </form>
  );
}
