import React, { Component, createContext } from 'react';
import decode from 'jwt-decode';
import axios from 'axios';

import config from '../utils/config.js';

const authContext = createContext();

class AuthLayer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        miner: null,
        authenticated: false,
        logout: this.logout,
        login: this.login,
        jwtToken: null
    }
    this.url = config["myriade_login_url"] || "http://0.0.0.0:8180";

  }

  login(email, password) {
    axios.post(`${this.url}/v1/account/login`, 
      {
        email, 
        password
      })
      .then(({data}) => {
        this.updateAuth(data.accessToken);
      })
  }

  logout() {
    localStorage.removeItem('access_token');
    this.setState({
        authenticated: false,
        accessToken: '',
        miner: null,
    });
  }

  updateAuth(accessToken) {
    localStorage.setItem('access_token', accessToken);
    const decodedToken = decode(accessToken);
    this.setState({
        miner: {
            id: decodedToken.sub,
            address: decodedToken.account.address,
            name: decodedToken.account.name
        },
        jwtToken: accessToken,
        authenticated: true,
    });
  }

  render(){
    return (
      <authContext.Provider value={this.state}>
          {this.props.children}
      </authContext.Provider>
  );
  }
}

export const AuthConsumer = authContext.Consumer;
export default AuthLayer;