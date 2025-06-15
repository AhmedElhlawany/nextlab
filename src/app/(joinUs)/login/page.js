
import { signIn, signOut } from "@/app/_lib/auth";
import React from "react";
import LoginButton from "./LoginButton";

export default function Login() {
  async function loginWithGoogle() {
    "use server";
    console.log("hello");
    await signIn("google", {
      redirectTo: "/",
    });
  }
  async function logout() {
    "use server";
    console.log("hello");
    await signOut({
      redirectTo: "/",
    });
  }
  return (
    <>
      <div className="mt-5">
        <form action={loginWithGoogle}>
         <LoginButton/>
        </form>
        <form action={logout}>
          <button className="bg-red-500  my-4 ms-5 p-2 rounded-lg">Logout</button>
        </form>
      </div>
    </>
  );
}
