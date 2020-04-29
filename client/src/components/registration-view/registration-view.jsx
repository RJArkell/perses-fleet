import React, { useState } from "react";
import { Container, Button, Form, Card } from "react-bootstrap";
import axios from "axios";

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [rank, setRank] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://perses-fleet.herokuapp.com/api/users", {
      Username: username,
      Password: password,
      Email: email,
      Rank: rank
    })
      .then(response => {
        const data = response.data;
        console.log(data);
        window.open("/", "_self");
      })
      .catch(e => {
        console.log("error registering the user")
      });
  };

  return (
    <Container className="loginform text-center" >
      <Card>
        <Card.Header className="header text-center"><h3>Create Fleet Security Access</h3></Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="regUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="regPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="regEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="regRank">
              <Form.Label>Rank</Form.Label>
              <Form.Control
                as="select"
                custom
                value={rank}
                onChange={(e) => setRank(e.target.value)}
              >
                <option>Recruit</option>
                <option>Ensign</option>
                <option>Lieutenant</option>
                <option>Commander</option>
                <option>Admiral</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}