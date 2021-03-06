import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth , createUserProfileDocument } from '../../firebase/FireBase-utlis';
import './SignUp.scss'

export default class SignUp extends Component {
    constructor(){
        super()

        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { displayName , email , password , confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert("Password don't match");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email , password);
            await createUserProfileDocument(user ,{ displayName });
            this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmPassword : ''
            })
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = e => {
        const {name , value} = e.target;

        this.setState({ [name] : value});
    }

    render() {

        const { displayName , email , password , confirmPassword} = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>i do not have account</h2>
                <span>Sign up with your email andpasswprd</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    lable='Display Name'
                    required
                    /> 
                    <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    lable='email'
                    required
                    /> 
                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    lable='password'
                    required
                    /> 
                    <FormInput
                    type='Password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    lable='Confirm Password'
                    required
                    /> 
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}
