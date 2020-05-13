import React, { useState } from "react";
import { Container, Button, Form, Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

export function EditProfile(props) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    axios.put(`https://perses-fleet.herokuapp.com/api/users/${localStorage.getItem("user")}/password`, {
      Password: password,
    })
      .then(res => {
        const data = res.data;
        console.log(data);
        alert("Password updated, please login again");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.open("/", "_self");
      })
      .catch(e => {
        console.log(e);
        alert("Unable to update password");
      });
  };

  const handleUpdateEmail = (e) => {
    e.preventDefault();
    axios.put(`https://perses-fleet.herokuapp.com/api/users/${localStorage.getItem("user")}/email`, {
      Email: email,
    })
      .then(res => {
        const data = res.data;
        console.log(data);
        alert("Email updated");
        window.open("/", "_self");
      })
      .catch(e => {
        console.log(e);
        alert("Unable to update email");
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
                type="text"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button className="button" type="submit" onClick={handleUpdatePassword}>Update Password</Button>
            <Form.Group>
              <Form.Label className="p-2">Change Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter new email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Button className="button" type="submit" onClick={handleUpdateEmail}>Update Email</Button>
          </Form>
          <Button component={Link} to={`/dashboard`} className="button">Return</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}