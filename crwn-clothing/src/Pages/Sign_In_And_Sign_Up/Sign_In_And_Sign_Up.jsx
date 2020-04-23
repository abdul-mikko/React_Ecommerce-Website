import React from "react";
import "./Sign_In_And_Sign_Up.style.scss";
import SignIn from "../../Components/Sign_In/Sign_In_compoent";
import SignUP from "../../Components/Sign_up/Sign_up.component";

const SignInandSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUP />
    </div>
  );
};
export default SignInandSignUp;
