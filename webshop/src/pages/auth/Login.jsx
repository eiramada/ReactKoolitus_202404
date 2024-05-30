import React from "react";
import AuthForm from "./AuthForm";

function Login() {
  return (
    <AuthForm
      headerText="Login"
      footerText="Don't have an account? "
      linkUrl="/signup"
      linkText="Sign Up"
      IsRememberMe={true}
      apiUrl="signInWithPassword"
    />
  );
}

export default Login;
