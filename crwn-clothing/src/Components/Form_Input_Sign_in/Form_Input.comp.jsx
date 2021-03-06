import React from 'react'
import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...args }) => {
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...args} />
            {
                label ? (<label className={`${args.value.length ? `shrink` : ''} form-input-label`}> {label}</label>) : null
            }
        </div >

    );
}

export default FormInput;