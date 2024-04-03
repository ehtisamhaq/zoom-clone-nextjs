import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <main className="flex-center h-screen w-full my-24">
      <SignIn />
    </main>
  );
};

export default SignInPage;
