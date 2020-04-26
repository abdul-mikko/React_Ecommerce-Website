import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, inverted, isGoogleSignIn, ...button }) => (
  <button
    className={` ${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    }  custom-button`}
    {...button}
  >
    {children}
  </button>
);

export default CustomButton;
