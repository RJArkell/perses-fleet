import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import axios from "axios";

export function CreateScreenshotTab(props) {
  const [address, setAddress] = useState('');
  const [user, setUser] = useState('');
  const date = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://perses-fleet.herokuapp.com/api/screenshots", {
      Address: address,
      User: user,
      Date: date,
    })
      .then(response => {
        const data = response.data;
        console.log(data);
        window.open("/", "_self");
      })
      .catch(e => {
        alert("Error posting the content");
        console.log(e);
      });
  };

  return (
    <Card className="squared">
      <Card.Header className="header text-center"><h4>Add Screenshot</h4></Card.Header>
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="URL"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Submitted By</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </Form.Group>
          <Button className="button" type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}