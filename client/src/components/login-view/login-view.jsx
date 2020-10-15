import React, { useState } from 'react';
import axios from 'axios';
import { Container, Button, Form, Card } from "react-bootstrap";

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
        window.open("", "_self");
      })
      .catch(e => {
        alert("Incorrect Password or Username");
        console.log(e);
      });
  };

  return (
    <Container className="loginform text-center" >
      <Card className="w-100 fb">
        <Card.Header className="header text-center"><h3>Restricted Area</h3></Card.Header>
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
            <Button className="button" type="submit" onClick={handleSubmit}>Submit</Button>
          </Form>
        </Card.Body >
      </Card>
    </Container>
  );
}