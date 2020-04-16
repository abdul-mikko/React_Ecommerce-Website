import React from 'react'
import './Sign_In.scss'
import FormInput from './Form_Input_Sign_in/Form_Input.comp'

class SignIn extends React.Component {
    constructor() {

        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have a account</h2>
                <span>Sign In with your email and password</span>
                <form onSubmit={this.handleSubmit}>

                    <FormInput type='email' name='email' value={this.state.email}
                        handleChange={this.handleChange} label='email'
                    />
                    <br />

                    <FormInput type='password' name='password' value={this.state.password}
                        handleChange={this.handleChange} label='password'
                    /><br />
                    <input type='submit' value='Submit Form' />
                </form>

            </div>
        );
    }
}
export default SignIn;