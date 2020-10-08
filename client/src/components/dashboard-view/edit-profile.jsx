import React, { useState } from "react";
import { Container, Button, Form, Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

export function EditProfile(props) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleUpdateUser = (e) => {
    e.preventDefault();
    axios.patch(`https://perses-fleet.herokuapp.com/api/users/${localStorage.getItem("user")}`, {
      Email: email,
      Password: password,
    })
      .then(res => {
        const data = res.data;
        console.log(data);
        alert("User info updated, please login again");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.open("/", "_self");
      })
      .catch(e => {
        console.log(e);
        alert("Unable to update user");
      });
  };

  return (
    <Container className="loginform text-center" >
      <Card className="w-100">
        <Card.Header className="header text-center"><h4>Update Profile</h4></Card.Header>
        <Card.Body>
          <Form className="pb-2">
            <Form.Group>
              <Form.Label className="p-2">Change Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="p-2">Change Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter new email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
          <Button className="button" type="submit" onClick={handleUpdateUser}>Update User</Button>
          <Link to={`/dashboard`}>
            <Button variant="contained" color="primary" className="button">Return</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}