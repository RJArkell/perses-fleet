import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

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
        window.open("/client", "_self");
      })
      .catch(e => {
        console.log("error registering the user")
      });
  };

  return (
    <Card style={{ width: "40%", backgroundColor: 'lightgrey' }}>
      <Card.Body>
        <Card.Title><h1>Edge of Umbra</h1></Card.Title>
        <Card.Text>Enter your information to create a new account</Card.Text>
        <Form>
          <Form.Group controlId="regUsername">
            <Form.Label>Username - Must be at least 5 characters long</Form.Label>
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
              type="date"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
          <Link to={`/login`}>
            <Button variant="secondary">Login with existing account</Button>
          </Link>
        </Form>
      </Card.Body>
    </Card>
  );
}