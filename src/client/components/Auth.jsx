import React, { Component, createContext } from 'react';
import decode from 'jwt-decode';
import axios from 'axios';

import config from '../utils/config.js';

const authContext = createContext();

class Auth extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        user: null,
        authenticated: false,
        logout: this.logout,
        login: this.login,
        jwtToken: null
    }
    this.url = config["myriade_login_url"] || "http://0.0.0.0:8180";

  }

  login(username, password) {
    
  }
}