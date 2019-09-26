import React, { Component } from 'react';

import { Col, Container } from 'react-bootstrap';
import { Card, CardHeader, CardBody, CardFooter, Button } from 'shards-react';
import { Form, FormInput, FormGroup, Alert } from "shards-react";

import PageStyle from '../styles/pages/Login.less';

class LoginPage extends Component {

  constructor(props){
    super(props);
    this.state ={
      loggin_in: false,
      error: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    this.setState({logging_in: true});
    return this.props.login(email, password)
    .catch(err => {
      console.log(err);
      this.setState({loggin_in: false, error: true})
    })
  }

  dismissError(){
    this.setState({error: false});
  }

  displayError() {
    return (
      <Alert theme="warning" dismissible={this.dismissError}>
        There was an error, try again.-{" "}
      </Alert>
    )
  }

  render() {
    return (
      <Container className={PageStyle.LoginPageBackground}>
        {this.state.error && this.displayError()}
        <Col md={{offset: 3, size: 6}} lg={{offset: 3, size:6}}>
          <Card className={PageStyle.LoginCard}>
            <CardHeader> Myriade Client </CardHeader>
            <CardBody>
              <Form onSubmit={this.handleLogin}>
                <FormGroup>
                  <label htmlFor="#email">Email</label>
                  <FormInput name="email" placeholder="john@example.com" />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="#password">Password</label>
                  <FormInput type="password" name="password" placeholder="Password" />
                </FormGroup>
                <Button outline pill theme="primary" type="submit">login &rarr;</Button>
              </Form>
            </CardBody>
            <CardFooter>Don't have a Myriade account? click <a href="">here</a> </CardFooter>
          </Card>
        </Col>    
      </Container>
      
    );
  }
}

export default LoginPage;