import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, ...button }) => (

    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''}  custom-button`} {...button}>{children}

    </button >)

export default CustomButton;