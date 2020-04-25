import React, { useState } from 'react';
import axios from 'axios';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password)
    axios.post('https://perses-fleet.herokuapp.com/api/login', {
      Username: username,
      Password: password,
    })
      .then(res => {
        const data = res.data;
        props.onLoggedIn(data);
      })
      .catch(e => {
        console.log(e)
      });
  };

  return (
    <Container className="loginform text-center" >
      <Card>
        <Card.Header className="header text-center"><h1>Restricted Area</h1></Card.Header>
        <Card.Body>
          <Card.Text>Please enter your credentials to continue.</Card.Text>
          <Form className="mt-3 mx-5">
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
          </Form>
        </Card.Body >
      </Card>
    </Container>
  );
}