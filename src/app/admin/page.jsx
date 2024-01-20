import React, { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import { auth } from "@/lib/auth";

export default async function AdminPage() {
  const session = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.column}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPostForm userId={session.user.id} />
          </Suspense>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <AdminUsers />
        </div>
        <div className={styles.column}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
}
