import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firbase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component{

  state ={
    email: '',
    password: ''
  }

//resets the email and pw to empty strings
  handleSubmit = event => {
    event.preventDefault();

    this.setState({email: '', password: ''})
  }

// sets the value of name and pw
  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render(){
    return(
      <div className="sign-in">
        <h2> I already have an account</h2>
        <span> Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
          name="email"
          type="email"
          value={this.state.email}
          handleChange={this.handleChange}
          label="Email"
          required
          />
          <FormInput
          name="password"
          type="password"
          value={this.state.email}
          handleChange={this.handleChange}
          label="Password"
          required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            {' '}
            Sign In With Google{' '}
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
};
export default SignIn;
