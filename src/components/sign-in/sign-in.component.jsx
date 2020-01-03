import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

function SignIn(){

    //created a single object so as to avoid multiple handlers
    const [state, setState] = useState({ email: '', password: '' });

    const { email, password } = state;

    const handleSubmit = event => {
        event.preventDefault();

        setState({ email: '', password: '' })
    }

    const handleChange = event => {
        const { name, value } = event.target;

        setState({ ...state, [name]: value });

    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email' 
                    type='email' 
                    value={email}
                    label='Email' 
                    handleChange={handleChange} 
                    required 
                />
                <FormInput 
                    name='password' 
                    type='password' 
                    value={password} 
                    label='Password'
                    handleChange={handleChange} 
                    required 
                />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google </CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignIn;