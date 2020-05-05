import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import axios from "axios";

export function EditPassword(props) {
  const [password, setPassword] = useState('');

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    axios.put(`https://perses-fleet.herokuapp.com/api/users/${localStorage.getItem("user")}`, {
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

  return (
    <Card className="h-100 w-100">
      <Card.Header className="header text-center"><h4>Create Security Access</h4></Card.Header>
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Label>Edit Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button className="button" type="submit" onClick={handleUpdatePassword}>Update Password</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}