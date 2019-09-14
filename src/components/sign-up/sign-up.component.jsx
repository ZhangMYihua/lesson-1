import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument} from '../../firebase/firbase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component{
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleSubmit = async event  => {
    event.preventDefault()

    if(password !== confirmPassword){
      alert("The passwords you have entered don't match")
      return;
    }

    try {
      // creates a new user account asociated with the specific email and password
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName });
    } catch (e) {
        console.error(error);
    }
  }
  render(){

    const { displayName, email, password, confirmPassword} = this.state;

    return(
      <div className = 'sign-up'>
        <h2 className='title'> I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            requried
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            requried
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            requried
          />
          <FormInput
            type='password'
            name='confirm password'
            value={confirmPassword}
            onChange={this.handleChange}
            label='confirm Password'
            requried
          />
          <CustomButton type='submit'> Sign up </CustomButton>
        </form>
      </div>
    )
  }

}
export default SignUp;
