import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import axios from "axios";

export function EditHomeTab(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://perses-fleet.herokuapp.com/api/news", {
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
    <Card className="squared tb lb">
      <Card.Header className="header text-center"><h4>Edit Home Page</h4></Card.Header>
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Label>Carousel One Picture</Form.Label>
            <Form.Control
              type="text"
              value=''
              onChange={(e) => setHeadline(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Carousel One Text</Form.Label>
            <Form.Control
              type="text"
              value=''
              onChange={(e) => setHeadline(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Carousel Two Picture</Form.Label>
            <Form.Control
              as="text"
              rows="3"
              value=''
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Carousel Two Text</Form.Label>
            <Form.Control
              as="text"
              rows="3"
              value=''
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Carousel Three Picture</Form.Label>
            <Form.Control
              type="text"
              value=''
              onChange={(e) => setLinkText(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Carousel Three Text</Form.Label>
            <Form.Control
              type="text"
              value=''
              onChange={(e) => setLinkText(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>About Perses Fleet</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value=''
              onChange={(e) => setLink(e.target.value)}
            >
            </Form.Control>
          </Form.Group>
          <Button className="button float-right mr-2" type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}