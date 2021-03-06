import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import './SignIn.scss';
import CustomButton from '../../components/custom-button/CustomButton';
import { signInWithGoogle } from '../../firebase/FireBase-utlis';

export default class SignIn extends Component {
    constructor(props){
        super(props)

        this.state = {
            email : '',
            password : '' 
        }
    }
    handleSubmit = e => {
        e.preventDefault();

        this.setState({email : '' , password : ''})
    }

    handleChange = e => {
        const {value , name} = e.target;

        this.setState({ [name] : value})
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email & password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email'
                    type='email'  
                    handleChange={this.handleChange}
                    value={this.state.email} 
                    lable='email'
                    required
                    />

                    <FormInput
                    name='password' 
                    type='password' 
                    handleChange={this.handleChange}
                    value={this.state.password} 
                    lable='password'
                    required
                    />
                    <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>Sign in with google</CustomButton>
                    </div>
                  </form>
            </div>
        )
    }
}
