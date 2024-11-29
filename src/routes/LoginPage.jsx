import { SignIn } from "@clerk/clerk-react";
import React from "react";

const LoginPage = () => {
  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)]  flex items-center justify-center">
      <SignIn signUpUrl="/register" />
    </div>
  );
};

export default LoginPage;