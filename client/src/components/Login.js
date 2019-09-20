import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import styled from 'styled-components'

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
    axiosWithAuth()
      .post('/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        // redirect to the apps main page?
        this.props.history.push('/bubblepage');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <LoginDiv>
        <br/>
        <br/>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            placeholder="login name"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            placeholder="password"
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </LoginDiv>
    );
  }
}

export default Login;

const LoginDiv = styled.div`
  width: 200px
  margin: 20px auto
`

