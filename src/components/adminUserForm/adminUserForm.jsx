"use client";
import React from "react";
import styles from "./adminUserForm.module.css";
import { addUser } from "@/lib/actions";
import { useFormState } from "react-dom";

export default function AdminUserForm() {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add new user</h1>

      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input type="text" name="img" placeholder="img" />
      <select name="isAdmin">
        <option value="false">is Admin ?</option>
        <option value="false">user</option>
        <option value="true">admin</option>
      </select>
      {state && state.error}
      <button>add</button>
    </form>
  );
}
