// import { sayHello } from "@/lib/actions";
import { addPost, deletePost } from "@/lib/actions";
import React from "react";

export default function ServerTestPage() {
  //   const actionInComponent = async () => {
  //     "use server";
  //     console.log("it workds here too!");
  //   };
  return (
    <div>
      {/* <form action={sayHello}>
        <button>Test me</button>
      </form> */}
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="description" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button>Create</button>
      </form>
      <form action={deletePost}>
        <input type="text" placeholder="post id" name="postId" />
        <button>Delete</button>
      </form>
    </div>
  );
}
