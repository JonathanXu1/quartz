import React, { Component } from 'react';

import { Col } from 'react-bootstrap';
import { Card, CardHeader, CardBody, CardFooter, Button } from 'shards-react';
import { Form, FormInput, FormGroup } from "shards-react";

class LoginPage extends Component {
    render() {
      return (
        <Form>
          <FormGroup>
            <label htmlFor="#username">Username</label>
            <FormInput id="#username" placeholder="Username" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="#password">Password</label>
            <FormInput type="password" id="#password" placeholder="Password" />
          </FormGroup>
        </Form>
      );
    }
}

export default LoginPage;