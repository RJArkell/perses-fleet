import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import axios from "axios";

export function CreateUserTab(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [rank, setRank] = useState('');
  const [status, setStatus] = useState('');
  const [commission, setCommission] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://perses-fleet.herokuapp.com/api/users", {
      Username: username,
      Password: password,
      Email: email,
      Rank: rank,
      Status: status,
      Commission: commission
    })
      .then(res => {
        const data = res.data;
        console.log(data);
        window.open("/", "_self");
      })
      .catch(e => {
        console.log("error registering the user")
      });
  };

  return (
    <Card className="squared tb lb">
      <Card.Header className="header text-center"><h4>Register User</h4></Card.Header>
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rank</Form.Label>
            <Form.Control
              as="select"
              custom
              value={rank}
              onChange={(e) => setRank(e.target.value)}
            >
              <option>Select Rank</option>
              <option>Recruit</option>
              <option>Ensign</option>
              <option>Lieutenant</option>
              <option>Captain</option>
              <option>Admiral</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              placeholder="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Commission</Form.Label>
            <Form.Control
              type="text"
              placeholder="Commission"
              value={commission}
              onChange={(e) => setCommission(e.target.value)}
            />
          </Form.Group>
          <Button className="button float-right mr-2" type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}