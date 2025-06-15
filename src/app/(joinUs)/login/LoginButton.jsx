// داخل src/app/(joinUs)/login/LoginButton.tsx
'use client';

import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button className="bg-blue-500 p-2 ms-5 rounded-lg" onClick={() => signIn('google')}>
      Sign in with Google
    </button>
  );
}
