import React, { useState } from 'react';
import axios from 'axios';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';

export class LoginView extends React.Component {
  render() {
    return (
      <Container className="loginform text-center" >
        <Card>
          <Card.Header className="header text-center"><h1>Restricted Area</h1></Card.Header>
          <Card.Body>
            <Card.Text>Please enter your credentials to continue.</Card.Text>
            <Form className="mt-3 mx-5">
              <Form.Group>
                <Form.Control
                  className="text-center"
                  type="text"
                  placeholder="Username"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  className="text-center"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button variant="primary" type="submit">Submit</Button>
            </Form>
          </Card.Body >
        </Card>
      </Container>
    );
  }
}