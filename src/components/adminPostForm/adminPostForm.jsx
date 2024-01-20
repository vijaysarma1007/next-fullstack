"use client";
import React from "react";
import styles from "./adminPostForm.module.css";
import { addPost } from "@/lib/actions";
import { useFormState } from "react-dom";

export default function AdminPostForm({ userId }) {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add new posts</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea type="text" name="desc" placeholder="Description" rows={10} />
      <button>Add</button>
      {state && state.error}
    </form>
  );
}
