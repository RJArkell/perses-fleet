import React, { useState } from "react";
import { Container, Button, Form, Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

export function EditPassword(props) {
  const [password, setPassword] = useState('');

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    axios.patch(`https://perses-fleet.herokuapp.com/api/users/${localStorage.getItem("user")}/password`, {
      Password: password
    })
      .then(res => {
        const data = res.data;
        console.log(data);
        alert("Password updated, please login again");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("rank");
        localStorage.removeItem("email");
        localStorage.removeItem("commission");
        localStorage.removeItem("commendations");
        localStorage.removeItem("status");
        localStorage.removeItem("staff");
        window.open("/", "_self");
      })
      .catch(e => {
        console.log(e);
        alert("Unable to update password");
      });
  };

  return (
    <Container className="loginform text-center" >
      <Card className="w-100 fb">
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
            <Button className="button" type="submit" onClick={handleUpdatePassword}>Update Password</Button>
          </Form>
          <Link to={`/dashboard`}>
            <Button variant="contained" color="primary" className="button">Return</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}