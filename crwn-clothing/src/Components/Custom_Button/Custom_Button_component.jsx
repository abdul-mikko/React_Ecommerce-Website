import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({ children, ...button }) => (

    <button className='custom-button' {...button}>{children}

    </button>)

export default CustomButton;