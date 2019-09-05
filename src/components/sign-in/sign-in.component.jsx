import React from 'react';
import './sign-in.styles.scss';

class SignIn extends React.Component{

  state ={
    email: '',
    password: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({email: '', password: ''})
  }

  handleChange = (event) => {
      const { value, name } = event.target;

      this.setState({[name]: value})
  }

  render(){
    return(
      <div>
        <h2> I already have an account</h2>
        <span> Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
          required
          />
          <label>Email</label>
          <input
          name="password"
          type="password"
          value={this.state.email}
          onChange={this.handleChange}
          required
          />
          <label>Password</label>
          <input type="submit" value="submit form"/>
        </form>

      </div>
    )
  }
};
export default SignIn;
